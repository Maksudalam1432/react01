import React, { useEffect } from 'react'

function Useef() {

  useEffect (()=>{

    const onclickbutton=async()=>{
       const get=await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data=await get.json()
        console.log(data)
    }
    onclickbutton()
  },[])
  return (
    <div className='flex justify-center items-center h-screen bg-gray-500  '>
      <button onClick={useEffect}  className='px-2 py-2 bg-blue-500 rounded-md text-2xl'>Click me</button>
       </div>
  )
}

export default Useef