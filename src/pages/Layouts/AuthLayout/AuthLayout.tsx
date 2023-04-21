import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../../reducer/rootReducer';

const AuthLayout = () => {
  const isSignedIn = useSelector((state:RootState) => state.currentUser.isSignedIn);
  // clear the alert and notice for every page change

  if (isSignedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <header>
        <nav>
          {/* Navigation links go here */}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default AuthLayout;
