import React, { useRef, useState } from "react";

export default function UseRef() {

  const [num1, setNum1] =useState('0');
  const [num2, setNum2] =useState('0');
  const fromInput= useRef();
  const input1=useRef();

  let submitForm =(e)=>{
    e.preventDefault();
    console.log(num1,'', num2)
    input1.current.focus();
    console.log(fromInput)
    fromInput.current.reset();
  }
  return (
    <>
      <div>Use Ref Test</div>
      <form ref={fromInput} onSubmit={submitForm}>
        <input type="text" ref={input1} onChange={(e)=>setNum1(e.target.value)}/>
        <input type="text" onChange={(e)=>setNum2(e.target.value)}/>
        <button>Submit</button>
      </form>
    </>
  );
}
