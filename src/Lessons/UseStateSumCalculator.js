import React, { useState } from "react";

export default function UseStateSumCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const addTwoNum = () => {
    setResult(parseInt(num1) + parseInt(num2));
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
      />
      <input
        className="inputs"
        type="number"
        placeholder="Add your second value"
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <button className="submitBtn" onClick={addTwoNum}>
        Add Two num
      </button>
      <p>Result is {result}</p>
    </>
  );
}
