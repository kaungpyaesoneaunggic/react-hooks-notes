import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const [num,setNum]=useState(0);
  const [num2,setNum2]=useState(0)
  const [five,setFive]=useState('It is not Five');
  const addOne=()=>{
    setNum((prev)=>(prev+1));
  }
  const addTwo=()=>{
    setNum2((prev)=>(prev+1));
  }
  useEffect(()=>{
     if(num===5){
      setFive('it was five')
     }
     console.log('it is called')
  },[num]) 
  return (
    <>
    <h1>five or not</h1>
    <h2>{five}</h2>
    <h2>One : {num}</h2>
    <button onClick={addOne}>Add One</button>
    <h2>Two  : {num2}</h2>
    <button onClick={addTwo}>Add One</button>
    </>
  )
}
