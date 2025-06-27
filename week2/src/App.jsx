// import React from 'react'

// const App = () => {
// // const Greeting =()=>{
// //   return <p>Welcome home</p>
// // }
// // const Fruitlist=()=>{
// //   return <ul>
// //   <li>Apple</li>
// //   <li>Banana</li>
// //   <li>Cherry</li>
// // </ul>
// // }
// const MainContent=()=>{
//   return(
//     <div>
//       <p>Hello</p>
//     </div>
//   )
// }
//  const Header=()=>{
//   return <h1>Heading</h1>
//  }
//   return (
//     <div>
//       <Header/>
//     {/* <Fruitlist/> */}
//      <MainContent/>
//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
// //   const Greeting=({name})=>{
// // return <p>Hello, {name}</p>
// //   }
// // const Header=()=>{
// // return <h1>Heading</h1>
// // }
// // const Component=()=>{
// //   return <p>Content</p>
// // }
// // const Footer=()=>{
// //   return <footer>© 2025 My App</footer>
  
// // }
// const Profile=({name,age,location})=>{
// return(
//   <div>
//   <h1>Name:{name}</h1>
//   <p>Age:{age}</p>
//   <p>location:{location}</p>
//   </div>
// )
// }
//   return (
//     <div>
//       <Profile name="Asmita" age="22" location="Nepal"/>
//       {/* <Header/>
//       <Component/>
//       <Footer/> */}
//       {/* <Greeting name="Asmita"/>
//       <Greeting name="Ram"/>
//       <Greeting name="Sita"/> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// const Toggle=()=>{
//   const[state, setstate]= useState(true)
//   const handletoggle=()=>{
//     setstate(!state)
//   }
//   return (
//     <div><button onClick={handletoggle}>{state? "hide":"show"}</button>
//    {state && <p>Toggle para</p>}
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <div><Toggle/></div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// const Counter=()=>{
//   const[state, setstate]=useState(0)
//   const handleincrement=()=>{
//    setstate(state+1)
//   }
//   const handledecrement=()=>{
//     setstate( state-1);
//   }
// return(
  
//   <div> <h2>Count {state}</h2>
//   <button onClick={handleincrement}>Increment</button>
//   <button onClick={handledecrement}>Decrement</button></div>
// )
// }
// const App = () => {
//   return (
//     <div><Counter/></div>
//   )
// }

// export default App
// import React from 'react'
// import { useState } from 'react'
// const Clickme=()=>{
// const [state, setstate]= useState('Click Me')
// const handleclick=()=>{
// setstate("You clicked me")
// }
// return(
//   <button onClick={handleclick}>{state}</button>
// )
// }
// const App = () => {
//   return (
//     <div><Clickme/></div>
//   )
// }

// export default App
// import React from 'react'
// import { useEffect } from 'react'
// const Welcomeonce=()=>{
// useEffect(()=>{
//   alert("Welcome to the app")
// },[])
// }
// const App = () => {
//   return (
//     <div><Welcomeonce/></div>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react'
const Loginstatus=()=>{
  const [islogin, setlogin]= useState(false);
  const handlelogin=()=>{
    setlogin(!islogin)
  }
  return <div>
    <p>{islogin? "You are logged in":"Youare logged out"}</p>
    <button onClick={handlelogin}>{islogin? "login":"Logout"}</button>
  </div>

}
const App = () => {
  return (
    <div><Loginstatus/></div>
  )
}

export default App