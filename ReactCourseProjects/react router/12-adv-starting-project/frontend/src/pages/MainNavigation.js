import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function MainNavigation() {
  return (
    <div>
      <Link to=".">home</Link>
      <Link to="events">events</Link>
      <Link to="events/new">addEvent</Link>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
