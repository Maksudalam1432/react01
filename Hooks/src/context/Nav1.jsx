import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeContext } from './Themecontext'

function Nav1() {
    const data= useContext(ThemeContext)
    console.log(data)
  return (
    <div className='flex justify-between items-center bg-green-400  p-8'>
        <h1 >MD</h1>
        <h1>{data}</h1>
        <Nav2 />
       
    </div>
  )
}

export default Nav1