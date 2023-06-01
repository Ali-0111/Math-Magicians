import React, { useState } from 'react';
import getNotNull from '../util/helper/notNull';
import Keys from './Keys/Keys';
import calculate from '../logic/calculate';
import '../styles/Frame.css';

function Calculator() {
  const dataSample = {
    total: null,
    operation: null,
    next: null,
  };
  const [calcData, setCalcData] = useState({ ...dataSample });

  const updateState = (btnText) => {
    const calculatedObject = calculate(calcData, btnText);
    setCalcData(calculatedObject);
  };

  const screenText = getNotNull(calcData);

  return (
    <div className="calc-frame">
      <div className="screen">
        <h2 className="output">{screenText}</h2>
      </div>
      <Keys updateState={updateState} />
    </div>
  );
}

export default Calculator;
