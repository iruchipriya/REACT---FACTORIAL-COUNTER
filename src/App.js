import React, { useState } from 'react';
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
    if (n == 1 || n == 0) return 1;
    else return n * factorial(n - 1);
  };

  const ans = factorial(number);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChnageHandler} /> is {ans}
      <button onClick={onClickHnadler}> Click </button>
      <p> Buton clicked {count} times</p>
    </div>
  );
}
