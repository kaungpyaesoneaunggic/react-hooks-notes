import React, { useState } from 'react'

export default function UseState() {
  const [temp, setTemp]=useState(0)
  const addOne=()=>{
    setTemp((prev)=>(prev+1))
  }
  return (
    <>
    <h1>{temp}</h1>
    <button onClick={addOne}>Add 1 to temp</button>
    </>
    
  )
}
