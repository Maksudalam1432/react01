

import React, { useState } from 'react'

function Usesta() {
  const [count,setcount]=useState(10);
    function inc(){
      if(count<20)
     setcount(count+1)
   
    }
    function dec(){
      
  if(count>0)
        setcount(count-1)
      
    }
   
  return (
    <div className='flex justify-center items-center bg-gray-700  h-screen'>
     <div className='w-[30%] h-[40%] bg-red-400 rounded-2xl h flex flex-col justify-center items-center  '>
      <h1 className='px-6 py-6  bg-gray-700 text-white rounded-2xl font-bold '>{count} </h1>
      
  <div className='flex gap-4 mt-8'>

   <button onClick={inc} className='   px-2 py-4 bg-blue-500 rounded-2xl  text-white'>Increment </button>
   <button onClick={dec} className='   px-2 py-4 bg-blue-500 rounded-2xl text-white'>Decrement </button>
  </div>
       </div>
     </div>

     
  
  )
}

export default Usesta