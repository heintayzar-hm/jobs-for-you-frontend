import { useSelector } from 'react-redux'
import './App.css'
import Login from './pages/Login/LoginPage'
import Register from './pages/Register/RegisterPage'
import AlertMessage from './components/Messages/AlertMessage/AlertMessage'
import NoticeMessage from './components/Messages/NoticeMessage/NoticeMessage'

const App = () => {
  // const currentUser = useSelector((state: any) => state.user.currentUser)
  const alert = useSelector((state :any) => state.app.alert);
  const notice = useSelector((state :any) => state.app.notice);

  // console.log(currentUser)
  return (
    <div className="App">
        {alert && <AlertMessage message={alert} />}
      {notice && <NoticeMessage message={notice} /> }

      <Login />
    </div>
  )
}

export default App
