import React,{ createContext, useState } from 'react'

export const GlobalContext=createContext();

export const GlobalProvider=({children})=>
{
    //CustomerDetail Change name this part
    const [CDuser, setCDuser]=useState([]); //retreve the details from home and save

    return <GlobalContext.Provider value={{CDuser, setCDuser}}>
        {children}
    </GlobalContext.Provider>
}