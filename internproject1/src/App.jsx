
import './App.css'
import { Routes ,Route, BrowserRouter} from "react-router-dom"
import Register from "./Components/Pages/Register/register"
import Login from "./Components/Pages/Login/login"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Register/>} />
     <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App