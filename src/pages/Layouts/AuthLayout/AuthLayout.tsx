import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const isSignedIn = useSelector((state:any) => state.currentUser.isSignedIn);
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
