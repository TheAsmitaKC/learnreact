import React, { useContext } from 'react'
import { Biocontext,Hecontext } from '..'

const about = () => {
    const myage = useContext(Hecontext)
    const myname= useContext(Biocontext)
  return (
    <div><h2>Hello context api from about. My name is {myname} I am {myage} years old</h2></div>
  )
}

export default about
