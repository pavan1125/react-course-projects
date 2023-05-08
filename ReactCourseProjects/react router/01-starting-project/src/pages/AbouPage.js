import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function AbouPage() {

    const navigate=useNavigate()
    setTimeout(()=>{
         navigate("/")
    },5000)
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}
