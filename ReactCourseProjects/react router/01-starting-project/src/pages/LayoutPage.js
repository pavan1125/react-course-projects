import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function LayoutPage() {
  return (
    <>
    <div>
       <Link to="/">home</Link>
       <Link to="about">about</Link>
       <Link to="products">Products</Link>
    </div>
     <Outlet/>
    </>
  )
}
