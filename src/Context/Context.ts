import {createContext} from "react";

interface ITokenContext {
    token: string,
    setToken:(token:string)=> void
}

interface  IStatusContext {
    revendeur:boolean,
    client:boolean,
    setRevendeur: (revendeur:boolean)=>void,
    setClient: (client:boolean)=>void,
}

export const StatusContext = createContext<IStatusContext>({
    revendeur:false,
    client:true,
    setRevendeur: ()=> {},
    setClient: ()=> {},
})


export const TokenContext = createContext<ITokenContext>({
    token: "",
    setToken:()=>{}
})