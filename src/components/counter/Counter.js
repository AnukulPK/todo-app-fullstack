import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ increment }) => {
  const [count, setCount] = useState(0);

  const countIncreaseHandler = () => {
    let newCount = count + increment;
    setCount(newCount);
  };

  return (
    <div className="counter">
      <button onClick={countIncreaseHandler}>+{increment}</button>
      <span className="count">{count}</span>
    </div>
  );
};

Counter.defaultProps = {
  increment: 1,
};

Counter.propTypes = {
  increment: PropTypes.number,
};

export default Counter;
