import React, { useCallback, useMemo, useState } from 'react'

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  const heavyCalculation = () => {
    let res = 0;
    for (let i = 0; i < 1000000000; i++) {
      res += i;
    }
    return res;
  };

  const useMemoValue=  useMemo(() => heavyCalculation(), []);

  const handleClickWithCallback = useCallback(() => {
    setResult((prev)=>(prev+useMemoValue));
    setCount(prevCount => prevCount + 1);
  }, [useMemoValue]);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <button onClick={handleClickWithCallback}>Increment with useCallback</button>
    </div>
  );
}
