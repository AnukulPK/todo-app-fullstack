import React from 'react';
import Counter from '../counter/Counter';

const CounterContainer = () => {
  return (
    <div className="counter">
      <Counter increment={1} />
      <Counter increment={5} />
      <Counter increment={10} />
    </div>
  );
};

export default CounterContainer;
