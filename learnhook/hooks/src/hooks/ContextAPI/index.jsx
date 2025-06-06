import { createContext, useContext } from "react";
//step1
export const Biocontext = createContext();
export const Hecontext = createContext();
export const Heprovider = ({children})=>{
    const myage = 30;
    return <Hecontext.Provider value={myage}>{children}</Hecontext.Provider>
}
//2nd step
 export const Bioprovider = ({children})=>{
    const myname ="aaa"

    return <Biocontext.Provider value={myname}>{children}</Biocontext.Provider>
}
//custom Hook
export const useBiocontext = ()=>{
const context= useContext(Biocontext)
return context;
}