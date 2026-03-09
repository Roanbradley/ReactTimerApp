import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, BrowserRouter, Routes, Route, Link  } from 'react-router-dom' ;
import { router } from './constants/router';

//top level component of the app  
// ├ Navbar
 //├ Router
 //│   ├ HomePage
 //│   ├ WorkoutsPage
 //│   └ ProfilePage
function App() {
  return (
    <div className='App'> 
      <RouterProvider router={router} />
      </div>
     
  )
}

export default App
