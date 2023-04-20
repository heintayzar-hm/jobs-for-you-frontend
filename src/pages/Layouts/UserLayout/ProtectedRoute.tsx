import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isSignedIn = useSelector((state:any) => state.currentUser.isSignedIn);

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
