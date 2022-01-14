import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CounterButton.css';

const CounterButton = ({ increment, incrementMethod }) => {
  const [count, setCount] = useState(0);

  const countIncreaseHandler = () => {
    let newCount = count + increment;
    setCount(newCount);
    incrementMethod(increment);
  };

  return (
    <div className="counter">
      <button onClick={countIncreaseHandler}>+{increment}</button>
      {/* <span className="count">{count}</span> */}
    </div>
  );
};

CounterButton.defaultProps = {
  increment: 1,
};

CounterButton.propTypes = {
  increment: PropTypes.number,
};

export default CounterButton;
