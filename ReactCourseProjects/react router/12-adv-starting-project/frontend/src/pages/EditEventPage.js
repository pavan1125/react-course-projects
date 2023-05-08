import React from 'react'
import {useParams} from "react-router-dom"
export default function EditEventPage() {
    const params=useParams()
    console.log(params)
  return (
    <div>
      <h2>edit {params.id} event page</h2>
    </div>
  )
}
