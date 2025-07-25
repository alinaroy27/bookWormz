import React from 'react'
import Home from './Home/Home'


import { Route, Routes } from "react-router-dom"

import Page from './Pages/page'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'



function App() {
  return (
    <>
      

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/Courses" element={<Page/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        
        
        </Routes>
      </div>
      
    </>
  )
}

export default App