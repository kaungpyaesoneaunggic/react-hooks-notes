import React, { useState } from "react";

export default function UseStateCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState("waiting");

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const addTwoNum = () => {
    if (!num2) {
      setResult(parseInt(num1));
    } else if (!num1) {
      setResult(parseInt(num2));
    } else if (isNaN(num1) || isNaN(num2)) {
      setResult("please input valid value");
    } else {
      switch (operator) {
        case "+":
          setResult(parseInt(num1) + parseInt(num2));
          break;
        case "-":
          if(num1<num2){
            setResult('invalid')
            alert('This is not allowed')
            break;
          }
          setResult(parseInt(num1) - parseInt(num2));
          break;
        case "*":
          setResult(parseInt(num1) * parseInt(num2));
          break;
        case "/":
          if(num2==0){
            setResult('invalid')
            alert('This is not allowed')
            break;
          }
          setResult(parseInt(num1) / parseInt(num2));
          break;
      }
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

      {/* i want this value to be received by button onClick addTwoNum */}
      <select
        className="inputs"
        onChange={(e) => {
          handleOperatorChange(e);
        }}
      >
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"*"}>x</option>
        <option value={"/"}>&#247;</option>
      </select>
      <input
        className="inputs"
        type="number"
        placeholder="Add your second value"
        onChange={(e) => {
          setNum2(e.target.value);
        }}
        step="0.001"
        required
      />
      <button className="submitBtn" onClick={addTwoNum}>
        Add Two num
      </button>
      <p>Result is <span className="text-primary">{result}</span></p>
    </>
  );
}
