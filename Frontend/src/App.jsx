import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Page from './Pages/page'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'



function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
      

      <div className="">
        <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/Courses" element={authUser?<Page/>:<Navigate to ="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Toaster/>
      </div>
      
    </>
  )
}

export default App