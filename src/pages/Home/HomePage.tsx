import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../reducer/store';
import { getUsersThunk } from '../../reducer/usersSlice/apiThunks';
import { RootState } from '../../reducer/rootReducer';
import { UserData } from '../../types';

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state:RootState) => state.users.users);
  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch]);

//   if (loading) return <Loading />;
  return (

      <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] gap-9">
      {users.map((user: UserData) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
      </ul>

  );
};

export default HomePage;
