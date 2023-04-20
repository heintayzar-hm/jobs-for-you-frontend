import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../reducer/appSlice/appSlice';
import { AppDispatch } from '../../reducer/store';
import { getUsersThunk } from '../../reducer/usersSlice/apiThunks';

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state:any) => state.users.users.attributes);
  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch]);

//   if (loading) return <Loading />;
  console.log(users)
  return (

      <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] gap-9">
      {users.map((user: any) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
      </ul>

  );
};

export default HomePage;
