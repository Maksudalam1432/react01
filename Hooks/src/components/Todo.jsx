
import React, { useState } from 'react'

function Todo() {
    const [todo,settodo]=useState("")
    const [todos,settodes]=useState([])
 
    const ans=(ele)=>{
         settodo((ele.target.value))
        //  console.log(todo)    
        }

         const addtodo=()=>{
            if(todo.trim()==="") return
             settodes([...todos,todo])
             settodo("")
            //  console.log("click me")
         }

         const deletetodo=(index)=>{
                console.log("click me")
                const newTodos = todos.filter((_, i) => i !== index)
             settodes(newTodos)
         }

  return (
    <div className='flex justify-center items-center min-h-[100vh]  bg-gray-400 '>
        <div className='w-100 h-  bg-white rounded-2xl text-center '>
        <h1 className='mt-20 font-semibold text-3xl '>TODO</h1>

        <div className='p-8 h-auto'>
            <input className='py-2 px-6 border-2 rounded-md' type="text" placeholder='Add Todo'  value={todo} onChange={ans}  />
            <button className='px-3 py-2.5 bg-blue-400 rounded-md ml-2 font-semibold' onClick={addtodo}>Add Todo </button>
           


               {todos.map((ele,index)=>(
                 
             <div
                key={index}
                className='flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md my-2 shadow-sm hover:bg-gray-200 transition'
              >
                <span className='text-gray-700'>{ele}</span>
                <button onClick={()=>deletetodo(index)} className='text-red-500 hover:text-red-700 font-bold px-2 py-2 bg-red-200 rounded-md' >✕ </button>
              </div>
        ))}
       
            
        </div>
            
        </div>
    </div>
  )
}

export default Todo