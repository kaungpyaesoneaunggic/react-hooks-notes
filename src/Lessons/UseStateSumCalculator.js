import React, { useState } from "react";

export default function UseStateSumCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const addTwoNum = () => {
    console.log(num1,'',num2)
      if(!num2){
        console.log('first')
        setResult(parseInt(num1));
      }
      else if(!num1){
        
        console.log('second')
        setResult(parseInt(num2));
      }
      else{
        
        console.log('third')
        setResult(parseInt(num1) + parseInt(num2));
      }
  };
  return (
    <>
      <h1>Use State Calculator</h1>
      <input
        className="inputs"
        type="number"
        placeholder="Add your first value"
        onChange={(e) => {
          setNum1(e.target.value);
        }}
        required
      />
      <input
        className="inputs"
        type="number"
        placeholder="Add your second value"
        onChange={(e) => {
          setNum2(e.target.value);
        }}
        required
      />
      <button className="submitBtn" onClick={addTwoNum}>
        Add Two num
      </button>
      <p>Result is {result}</p>
    </>
  );
}
