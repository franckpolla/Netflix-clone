import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function Row(props) {
 const [movies, setMovies]=useState([]);

 useEffect(()=>{
    const fecthData=async()=>{
        try {    
        const response=await axios.get(props.fetchURL)
        setMovies(response.data.results)
        } catch (error) {
            console.error(error)            
        }
    }
 fecthData()

 },[props.fetchURL])

 console.log(movies)

  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'> {props.title}</h2>
    <div className='relative flex items-center'>
        <div id={'slider'}>

        </div>
    </div>
    </div>
  )
}

export default Row