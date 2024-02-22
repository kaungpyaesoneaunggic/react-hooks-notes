import React, { useState } from 'react'

export default function UseState() {
  const [count, setCount]=useState(0)
  const addOne=()=>{
    setCount((prev)=>(prev+1)); //0+1
    setCount((prev)=>(prev+1)); //1+1
    setCount((prev)=>(prev+1)); //2+1
    // setCount(count+1); //0+1
    // setCount(count+1); //0+1
    // setCount(count+1); //0+1
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={addOne}>Add 1 to count</button>
    </>
    
  )
}
