import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function EventDetailPage() {

    const params = useParams()
    console.log(params)
  return (
    <div>
      <h1>event Detail page</h1>
      <Link to={`/events/${params.id}/edit`}>edit</Link>
    </div>
  )
}
