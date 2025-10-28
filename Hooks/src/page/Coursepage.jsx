import React from 'react'
import { useParams } from 'react-router-dom'

function Coursepage() {
    const ans=useParams()
    console.log(ans.id)
  return (
    <div className=' text-2xl flex justify-center items-center mt-80 ' >{ans.id} your page</div>
  )
}

export default Coursepage