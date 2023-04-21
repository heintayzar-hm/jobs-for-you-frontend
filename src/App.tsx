import { useSelector } from 'react-redux'
import './App.css'
import Login from './pages/Login/LoginPage'
import Register from './pages/Register/RegisterPage'
import AlertMessage from './components/Messages/AlertMessage/AlertMessage'
import NoticeMessage from './components/Messages/NoticeMessage/NoticeMessage'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import AuthLayout from './pages/Layouts/AuthLayout/AuthLayout'
import ProtectedRoute from './pages/Layouts/UserLayout/ProtectedRoute'
import AdminRoute from './pages/Layouts/AdminLayout/AdminRoute'
import { RootState } from './reducer/rootReducer'

const App = () => {
  // const currentUser = useSelector((state: any) => state.user.currentUser)
  const alert = useSelector((state :RootState) => state.app.alert);
  const notice = useSelector((state :RootState) => state.app.notice);

  // console.log(currentUser)
  return (
    <div className="App">
        {alert && <AlertMessage message={alert} />}
      {notice && <NoticeMessage message={notice} /> }

      <Routes>
          <Route path="/" element={<HomePage />} />
\          {/* guests routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* protected routes aka users routes */}
          <Route element={<ProtectedRoute />}>
            {/* this is the example route and usage you can find how to use it in that component */}
            <Route path="/user" element={<HomePage />} />
          </Route>

          {/* You can define admin routes here */}

          <Route element={<AdminRoute />}>
            {/* this is the example route and usage you can find how to use it in that component */}
          </Route>

          {/* 404 redirect to / */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}

export default App
