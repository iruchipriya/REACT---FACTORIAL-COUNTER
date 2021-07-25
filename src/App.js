import React, { useState, useMemo } from 'react';
import './style.css';

export default function App() {
  const [number, setNumber] = useState('');
  const [count, setCount] = useState(0);

  const onChnageHandler = e => {
    setNumber(+e.target.value);
  };

  const onClickHnadler = () => {
    let counter = count + 1;
    setCount(counter);
  };
  const factorial = n => {
    console.log('fact called');
    ///EVEN IF THE INPUT VALYUE IS NOT CHANGED, FACT IS CALCULATED AGAIN AND AGAIN , IF WE ONLY CLICK THE BUTTON.
    if (n == 1 || n == 0) return 1;
    else return n * factorial(n - 1);
  };

  //now this only czlled when NUMBER IS CHANGED.
  const ans = useMemo( () => factorial(number), [number]);



  //WITHOUT USEMEMO
  // const ans = factorial(number);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChnageHandler} /> is {ans}
      <button onClick={onClickHnadler}> Click </button>
      <p> Buton clicked {count} times</p>
    </div>
  );
}
