import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Button from '@mui/material/Button';


const Layout = () => {
  return (
   <div>
     <div className='navbar'>
      <ul>
        
      <Button variant="contained">Contained</Button>
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
