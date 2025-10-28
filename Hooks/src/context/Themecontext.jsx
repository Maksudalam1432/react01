import React, { createContext, useState } from 'react'


export const ThemeContext = createContext()


function ThemeProvider(props) {
   
      const [theme,settheme]=useState('light')
  return (
    <ThemeContext.Provider value={[theme,settheme]}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
