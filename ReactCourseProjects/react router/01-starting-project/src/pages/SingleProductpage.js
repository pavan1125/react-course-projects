import React from 'react'
import { useParams } from 'react-router-dom'
export default function SingleProductpage() {

    const params=useParams()
    console.log(params)
  return (
    <div>
      <h1>Single product page</h1>
      <p>search params is {JSON.stringify(params)}</p>
    </div>
  )
}
