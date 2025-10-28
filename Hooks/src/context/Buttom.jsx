import React, { useContext } from 'react'
import { ThemeContext } from './Themecontext'

function Buttom() {
   const [theme,settheme] =useContext(ThemeContext)
    function num(){
         settheme("dark")
    }
  return (
    <div onClick={num} className='bg-gray-500 w-25 items-center flex justify-center rounded-md mt-2  ml-8 h-13'>Click me </div>
  )
}

export default Buttom