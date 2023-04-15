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
    <section className="calc-wrapper">
      <article className="calc-introdcution">
        <h2>Let&apos;s do some basic calculation!</h2>
      </article>
      <article className="calc-frame">

        <div className="screen">
          <p className="output">{text}</p>
        </div>

        <Keys object={createObject} />

      </article>
    </section>
  );
}

export default Calculator;
