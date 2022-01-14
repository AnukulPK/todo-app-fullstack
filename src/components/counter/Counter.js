import React, { useState } from 'react';
import CounterButton from '../counterButton/CounterButton';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countIncreaseHandler = (increment) => {
    // console.log('increment Value', increment);
    let newCount = count + increment;
    setCount(newCount);
  };

  return (
    <div className="counter">
      <CounterButton increment={1} incrementMethod={countIncreaseHandler} />
      <CounterButton increment={5} incrementMethod={countIncreaseHandler} />
      <CounterButton increment={10} incrementMethod={countIncreaseHandler} />
      <span className="count">{count}</span>
    </div>
  );
};

export default Counter;
