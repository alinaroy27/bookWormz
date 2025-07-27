import React from 'react'
import Bannerimg from "../../public/Bannerimg.jpg"

function Banner() {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
            <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-28">
              <div className="space-y-10">
                <h1 className="text-4xl font-bold">Welcome to BookWormz - Because Reading Never Goes <span className="text-pink-500">Out of Style!!!</span></h1>
              <p className="text-xl">
                Whether you're a curious student, an avid reader, or someone just starting your reading journey, our shelves are filled with stories, knowledge, and treasures waiting to be discovered. Explore a wide range of genres, from timeless classics to the latest bestsellers — there's something here for everyone. Welcome to your new favorite reading spot!
              </p>
              <label className="input validator w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
 
  <input type="email" placeholder="Enter valid Email Addresss" required  />
   
</label>
<button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
            <div className="order-1 w-full md:w-1/2">
              <img 
  src={Bannerimg} 
  alt='' 
  className="mx-auto mt-10 md:mt-28 w-[300px] md:w-[500px] h-auto object-cover"
/>


            </div>
        </div>
    </>
  )
}

export default Banner