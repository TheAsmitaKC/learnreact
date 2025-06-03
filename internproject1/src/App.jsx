import './App.css'
import { Routes ,Route, BrowserRouter} from "react-router-dom"
import Register from "./Components/Pages/Register/register"
import Login from "./Components/Pages/Login/login"
import Home from './Components/Pages/Home/home'
import Detailview from "./Components/Pages/Detailview/Detailview"
import Filter from "./Components/Pages/Filter/filter"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Register/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/home' element={<Home/>}/>
     <Route path="/product/:id" element={< Detailview/>} />
     <Route path='/filter' element={<Filter/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;