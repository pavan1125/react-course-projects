import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function EventsPage() {
  return (
    <div>
      <h1>Events page</h1>
      <Link to="/events/1">event1</Link>
      <Link to="/events/2">event2</Link>
      <Link to="/events/3">event3</Link>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
