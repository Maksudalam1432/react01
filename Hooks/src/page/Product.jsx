import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Men from './Men'
import Women from './Women'
function Product() {
  return (
    <div className=' text-2xl flex flex-col justify-center items-center mt-20 '>
        <h1>Product</h1>
        <div className='flex gap-6'>

      <Link to="/Product/Men">Men</Link>
      <Link to="/Product/Women" >Women</Link>   
        </div>
        <Outlet/>
    </div>
  )
}

export default Product  