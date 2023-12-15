import { useState,useEffect } from 'react'
import './App.css'
import { Route,RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/home/Home'
import Login from './Pages/login/Login'


 const App = () => { 

  const router = createBrowserRouter([ 
    { 
      path: "/", 
      element: <Layout />, 
      children: [ 
        { 
          index: true, 
          element: <Home />, 
        }, 
        { 
          path: "/login", 
          element: <Login/>, 
        },  
      ], 
    }, 
   ]); 
 
  return <RouterProvider router={router} />; 
};
export default App