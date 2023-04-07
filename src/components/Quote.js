import React, { useState } from 'react';
import Fetch from './Fetch';

const Quote = () => {
  const [advice, setAdvice] = useState('Advice here');
  console.log(Fetch());
  return (
    <div className="advice-container">
      <h3>{ advice }</h3>
      <button type="button" onClick={setAdvice}>Click</button>
    </div>
  );
};

export default Quote;
