import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between  p-6 bg-gray-300'>
        <h1>MD</h1>
        <div  className=' flex gap-12'>
        <h3    >Home</h3>
        <h3   >About</h3>
        <h3   >Card</h3>
        <h3   >Product</h3>
        </div>
        <button className='w-15 h-10 bg-red-500 rounded-md active:scale-95 hover:bg-blue-500'>Login</button>
    </div>
  )
}

export default Navbar