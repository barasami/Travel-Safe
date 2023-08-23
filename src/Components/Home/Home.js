import React, { useEffect, useState } from 'react'
import { availableRooms } from './homerooms'

function Home() {
    const[available,setAvailable]=useState([])
    useEffect(()=>{
      availableRooms()
      .then(({data})=>{
        setAvailable(data)
        console.log(data);
      })
    },[])
  return (
    <div>Home</div>
  )
}

export default Home