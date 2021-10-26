import React, { useState } from 'react';
import { KeyBoard } from './KeyBoard';
import './calculator.css';

export default function Calculator(props) {
  const [count, setCount] = useState('0');

  const buttonListener = (e) => {
    console.log('current clicked', e.target.value);
    const { value } = e.target; //e.target.value is same as value
    const operators = ['+', '-', '*', '/'];
    //numbers [0-9] , operator [*,/,+,-], special [clear, =]
    if (value >= 0 && value <= 9) {
      setCount((prev) => prev + e.target.value);
    } else if (operators.includes(value)) {
      setCount((prev) => prev + e.target.value);
    } else if (value === 'clear') {
      setCount('');
    } else if (value === '=') {
      const total = eval(count);
      setCount(total);
    }
  };

  return (
    <>
      <h1>{props.title}</h1>
      <input
        className="cal-input"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <KeyBoard buttonListener={buttonListener} />
    </>
  );
}
