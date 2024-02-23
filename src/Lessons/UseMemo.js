import React, { useEffect, useMemo, useState } from "react";

export default function UseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const count1Change = () => {
    setCount1((prev) => prev + 1);
  };
  const count2Change = () => {
    setCount2((prev) => prev + 1);
  };
  const count3Change = () => {
    setCount3((prev) => prev + 1);
  };
  

  let isEven = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  let isOdd = false;
  useEffect(() => {
    let i = 0;
    while (i < 500000000) i++;
    if (count2 % 2 !== 0) {
      isOdd = true;
    } else isOdd = false;
  }, [count2]);

  return (
    <>
      <h1>Count1 is {isEven ? "Even" : "Odd"}</h1>
      <h2>{count1}</h2>
      <button onClick={count1Change}>Add Count 1</button>
      <br></br>
      <h2>{count2}</h2>
      <button onClick={count2Change}>Add Count 2</button>
      <h2>{count3}</h2>
      <button onClick={count3Change}>Add Count 2</button>
    </>
  );
}
