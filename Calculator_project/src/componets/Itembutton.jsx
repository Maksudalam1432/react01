import React from 'react'

function Itembutton() {
 let itemvalue=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
 
 return (
    <div className='flex flex-wrap ml-5 mt-5 '>
       {itemvalue.map((item,index)=>(
        
   <button key={index} className='flex  px-6 py-4 rounded-md m-2 bg-gray-500 text-white text-2xl'>{item}</button>
       ))}
 
   
    </div>
  )
}

export default Itembutton