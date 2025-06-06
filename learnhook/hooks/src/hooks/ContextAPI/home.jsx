import React, { useContext } from 'react'
import { Biocontext, useBiocontext } from '.'

const home = () => {
    //using contextapi
    // const myname = useContext(Biocontext)

    //using custom Hook
    const myname = useBiocontext();
  return (
    <div><h1>home context api. My name is {myname}</h1></div>
  )
}

export default home