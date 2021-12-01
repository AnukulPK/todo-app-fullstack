import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countIncreaseHandler = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="counter">
      <button onClick={countIncreaseHandler}>+1</button>
      <span className="count">{count}</span>
    </div>
  );
};

export default Counter;
