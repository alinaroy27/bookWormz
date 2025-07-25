import React from 'react'
import Nav from '../components/Nav'
import Courses from '../components/Courses'
import Footer from '../components/Footer'


function Page() {
  return (
    <>
        <Nav/>
        <div className="min-h-screen"><Courses/></div>
        <Footer/>
    </>
  )
}

export default Page