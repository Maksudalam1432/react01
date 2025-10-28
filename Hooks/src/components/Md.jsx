import React, { useState } from 'react'

function Md() {

  const [name,setname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const handle=(e)=>{
    e.preventDefault()  
    console.log(name,lastname,email,password)
  }


  return (
    <div className='flex justify-center items-center min-h-[100vh] bg-gray-600  text-white font-semibold'>


       <form  onSubmit={handle} >
        <input value={name} onChange={(e)=>setname(e.target.value)}  type="text" placeholder='Enter your first name'  className='px-6 py-2 rounded-md border-2 mt-4' />
        <br />
        <input value={lastname } onChange={(e)=>setlastname(e.target.value)}  type="text" placeholder='Enter your last name'  className='px-6 py-2 rounded-md border-2 mt-4' />
        <br />
        <input  value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Enter your email '  className='px-6 py-2 rounded-md border-2 mt-4' />
        <br />
        <input value={password}  onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='Enter your password'  className='px-6 py-2 rounded-md border-2 mt-4' />
        <br />
        <button className='px-4 py-2 bg-red-800 ml-40 rounded-md mt-1' type='submit'>Submit</button>
        
       </form>
    </div>
  )
}

export default Md