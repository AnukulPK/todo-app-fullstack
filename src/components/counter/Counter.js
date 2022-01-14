import React, { useState } from 'react';
import CounterButton from '../counterButton/CounterButton';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countIncreaseHandler = (increment) => {
    // console.log('increment Value', increment);
    let newCount = count + increment;
    setCount(newCount);
  };

  const countDecrementHandler = (decrement) => {
    // console.log('increment Value', increment);
    let newCount = count - decrement;
    setCount(newCount);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <CounterButton
        increment={1}
        decrement={1}
        incrementMethod={countIncreaseHandler}
        decrementMethod={countDecrementHandler}
      />
      <CounterButton
        increment={5}
        decrement={5}
        incrementMethod={countIncreaseHandler}
        decrementMethod={countDecrementHandler}
      />
      <CounterButton
        increment={10}
        decrement={10}
        incrementMethod={countIncreaseHandler}
        decrementMethod={countDecrementHandler}
      />
      <span className="count">{count}</span>
      <div>
        <button className="reset" onClick={resetHandler}>
          Reset
        </button>{' '}
      </div>
    </div>
  );
};

export default Counter;
