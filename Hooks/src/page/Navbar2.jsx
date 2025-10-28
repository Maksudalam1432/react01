import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar2() {
    const navigate=useNavigate()
  return (
    <div className='py-4 px-8 bg-cyan-800 flex gap-4'>
        <button onClick={()=>{
            navigate('/')
        }} className='bg-red-300 rounded-md h-10 p-4 items-center flex '>Return To Home page </button>
        <button onClick={()=>{
            navigate(-1)
        }} className='bg-red-300 rounded-md h-10 p-4 items-center flex '>Back Page </button>
        <button onClick={()=>{navigate(1)
        }} className='bg-red-300 rounded-md h-10 p-4 items-center flex '>Next Page </button>
    </div>
  )
}

export default Navbar2