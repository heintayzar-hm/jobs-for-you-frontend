import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../../reducer/rootReducer';

const ProtectedRoute = () => {
  const isSignedIn = useSelector((state:RootState) => state.currentUser.isSignedIn);

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
