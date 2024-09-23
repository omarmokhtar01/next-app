"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [mode , setMode] = useState('dark')

    //create function to switch between frist state and scond state (dark - light)
const toggle = () =>{
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'))
    //prev =>  الحاله السابقه في سطر 8 الي هي دارك وهاتلي بقي عكسها 
}

    return(
        <ThemeContext.Provider value={{toggle ,mode}}>
        <div className={`theme ${mode}`}>
        {children}</div>
        </ThemeContext.Provider>
    )
        
    

}