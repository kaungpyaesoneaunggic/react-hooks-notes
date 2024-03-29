import React, { useEffect, useState } from "react";

export default function UseStateCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState("waiting");

  const handleOperatorChange = (operator) => {
    setOperator(operator);
  };
  useEffect(() => {
    addTwoNum();
  }, [num1,num2,operator]);

  const addTwoNum = () => {
    if (!num2 && num1) {
      setResult(parseInt(num1));
    } else if (!num1 && num2) {
      setResult(parseInt(num2));
    } else if (isNaN(num1) && isNaN(num2)|| !num1 && !num2) {
      setResult(':)')
    } else {
      switch (operator) {
        case "+":
          setResult(parseInt(num1) + parseInt(num2) +' (added)');
          break;
        case "-":
          if (num1 < num2) {
            setResult("invalid");
            alert("This is not allowed");
            break;
          }
          setResult(parseInt(num1) - parseInt(num2)+ ' (subtracted)');
          break;
        case "*":
          setResult(parseInt(num1) * parseInt(num2)+' (multiplied)');
          break;
        case "/":
          if (num2 == 0) {
            setResult("invalid");
            alert("This is not allowed");
            break;
          }
          setResult(parseInt(num1) / parseInt(num2)+ ' (divided)');
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
        min={0}
        required
      />

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
      <div className="inputs m-0 justify-content-between">
      <div>
      </div>
        <button className="btn btn-primary col-sm-3" value={"+"} onClick={()=>handleOperatorChange('+')}>
        +
        </button>
        <button className="btn btn-primary  col-sm-3" value={"-"} onClick={()=>handleOperatorChange('-')}>
          -
        </button>
        <button className="btn btn-primary  col-sm-3" value={"*"} onClick={()=>handleOperatorChange('*')}>
          x
        </button>
        <button className="btn btn-primary  col-sm-3" value={"/"} onClick={()=>handleOperatorChange('/')}>
          &#247;
        </button>
      </div>
      <p className="inputs" style={{backgroundColor:'white',color:'black', margin:'0px' }}>
        Result is <span className="text-primary">{result}</span>
      </p>
    </>
  );
}
