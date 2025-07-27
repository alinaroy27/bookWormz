import React from 'react'
import Cards from './Cards'

import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

function Courses() {
    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res = await axios.get("http://localhost:4001/book")
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log("Error",error)
            }
        }
        getBook();
    },[])
  return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-30 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl">We are delighted to have you <span className="text-pink-500">Here! :)</span></h1>
            <p className="mt-10 text-lg ">Step into a universe of imagination, knowledge, and inspiration. Our diverse collection offers something for every reader — from gripping fiction and timeless classics to self-help, history, and more. Whether you're a curious beginner or a lifelong book lover, there's always something new to discover. Browse, explore, and let each book take you on a new journey!</p>
            <Link to= "/">
                <button className="bg-pink-500  text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
   </>
  )
}

export default Courses