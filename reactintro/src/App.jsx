
// const App = () => {
// function formatname(user){
//   return user.fname +'' + user.lname
// }
// function handlename(user){
//   if(user){
//     return <h1>hello {formatname(user)}</h1>
//   }
//   else{
//     return <h1>Hello stranger</h1>
//   }
// }
// //  const user ={
// //   fname :"Asmita",
// //   lname :"KC"
// //  }
// const user = null;
// const element = handlename(user)

//   return (
//     <>
//       {element}
//     </>
//   )
// }

// export default App


  // const element = (
  //   <h1 className="greeting">
  //     Hello, world!
  //   </h1>
  // );
//   const element=React.createElement(
//     'h1',{className:'greeting'},
//     'Hello world'
//   );
//  const elements =(
//   <h1 className='greeting'>Hello</h1>
//  )
// const isLoggedIn = false;
// const element = <h1>{ isLoggedIn ? "wlc":"login now"}</h1>
// function greet(name){
//   return `Hello, ${name}`
// }
// const element = <p>{ greet("AA")}</p>
// const user ={
//   fname :"aaa",
//   lname :"kc"
// }
// const element =<h1>hello {user.fname} {user.lname}</h1>
// const style = {color: "blue", fontSize:"30px"}
// const element= <p style={style}>Styleddtext</p>

// const user =[1,2,3,4]
// const element = (
//   <ul>
//     {user.map((user, index)=> <li key ={index}>{user}</li> )}
//   </ul>
  
// )
// const items = [5,6,7,8]
// const elements = (
//  <ul>
//   {items.map((items, index)=><li key={index}>{items}</li> )}
//  </ul>
// )
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }
// const elements =<Welcome name="aaaaaaa"/>
import React from 'react'
import Heading from './Heading'
import Name from "./Name.tsx";
const App = () => {

  function  Welcome(props){
    return <h1>hello, {props.name}</h1>
  }
  return (
    <div>
<Welcome name ="Sara"/>
    </div>
    // <div>
    //   <Heading  title ="Title from props" desc="desc from props"/>
    //   {/* <h1>Hello from app</h1> */}
    //   <Name/>
    // <h2>Body</h2>
    // <h3>Footer</h3>
    //  </div>
  )
}

export default App