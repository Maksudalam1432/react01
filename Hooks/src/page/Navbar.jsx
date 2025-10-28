import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-between bg-gray-400  text-2xl p-12 py-10'>
        <h1>MD</h1>
        <div className='flex gap-14 '>
           <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Course">Course</Link>
            <Link to="/Product">Product</Link>
           
        </div>
    </div>
  )
}

export default Navbar