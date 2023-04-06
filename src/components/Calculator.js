import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Keys from './Keys';
import '../styles/Frame.css';

function Calculator() {
  const [object, setobject] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const createObject = (btnText) => {
    const stack = calculate(object, btnText);
    setobject(stack);
  };

  let text = '';
  if (object.total && !object.operation) {
    text = object.total;
  } else if (object.next && object.total) {
    text = object.total + object.operation + object.next;
  } else if (object.total) {
    text = object.total + object.operation;
  } else {
    text = object.next;
  }

  return (
    <div className="calc-frame">

      <div className="screen">
        <h2 className="output">{text}</h2>
      </div>

      <Keys object={createObject} />

    </div>
  );
}

export default Calculator;
