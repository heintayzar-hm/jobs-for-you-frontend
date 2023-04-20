
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { SignInRequestSentAction, UserLoginDetails, ValidateionError} from  "../../types"
// import { setNotice, setAlert, clearAll } from '../../../slices/appSlice/appSlice';
import { loginThunk } from '../../reducer/currentUserSlice/apiThunks';
import { AppDispatch } from '../../reducer/store';
import SmallErrorMessage from '../../components/SmallErrorMessgae/SmallErrorMessage';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required!!'),
  password: Yup.string().min(6, 'Password is Too Short!').max(50, 'Password is Too Long!').required('Email is Required'),
});

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<ValidateionError>();
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  // handle app state

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validate the form
    LoginSchema.validate({ email, password }, { abortEarly: false }).then((res) => {
      // if validation passes, dispatch the thunk
        const loginDetails: UserLoginDetails = {
            email: res.email,
            password: res.password
        }
     dispatch(loginThunk(loginDetails))
    }).catch((err) => {
      // if validation fails, set the errors
      const newErrors = {} as ValidateionError;

        err.inner.forEach((error :any) => {
            newErrors[error.path as keyof ValidateionError] = error.message;
        })
      setErrors(newErrors);
    });
  };

  const showHandler = (e: any) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    if(passwordRef.current){
      passwordRef.current.type = showPassword ? 'password' : 'text';
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <h1 className="flex font-secondary items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          JOBS_FOR_YOU
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log In your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

              <div>
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</span>
                <input
                  type="email"
                  id="email"
                  placeholder="joe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border focus:outline-none focus:shadow-focus border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="email"
                />
                {errors?.email && <SmallErrorMessage message={errors.email}></SmallErrorMessage>}
              </div>
              <div>
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</span>
                <div className="relative">

                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border focus:outline-none focus:shadow-focus border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="current-password"
                    ref={passwordRef}
                  />

                  <button type="button" className="absolute right-3 top-3 text-gray-400" onClick={showHandler}>
                    {showPassword ? (<AiFillEye />) : (<AiFillEyeInvisible />)}
                  </button>
                </div>
                {errors?.password && <SmallErrorMessage message={errors.password} />}
                {' '}

              </div>

              <button type="submit" className="w-full text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Log In</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t have an account?
                {' '}
                <Link to="/register" className="text-primary hover:text-hoverPrimary hover:underline dark:text-primary-400">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
