import { useSelector } from 'react-redux'
import './App.css'
import Login from './pages/Login/LoginPage'
import Register from './pages/Register/RegisterPage'

const App = () => {
  // const currentUser = useSelector((state: any) => state.user.currentUser)
  // console.log(currentUser)
  return (
    <div className="App">
      <Register />
    </div>
  )
}

export default App
