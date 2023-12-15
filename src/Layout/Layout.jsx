import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const Layout = () => {
  return (
   <div>
     <div className='navbar'>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="*">abcd</Link>
        </li>
      </ul>
      </div>

      <Outlet />
   </div>
  )
}

export default Layout
