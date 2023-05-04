import {createContext} from "react";

interface ITokenContext {
    token: string,
    setToken:(token:string)=> void
}

interface  IStatusContext {
    isLogin:boolean
    revendeur:boolean,
    client:boolean,
    setIsLogin:(isLogin:boolean)=>void,
    setRevendeur: (revendeur:boolean)=>void,
    setClient: (client:boolean)=>void,
}



export const StatusContext = createContext<IStatusContext>({
    isLogin:false,
    revendeur:false,
    client:true,
    setIsLogin:()=>{},
    setRevendeur: ()=> {},
    setClient: ()=> {},
})


export const TokenContext = createContext<ITokenContext>({
    token: "",
    setToken:()=>{}
})