import React, { useState } from 'react';
import getNotNull from '../util/helper/notNull';
import ScreenText from '../components/screenText';
import Keys from '../components/Keys/Keys';
import calculate from '../logic/calculate';
import '../styles/CalcFrame.css';

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
      <ScreenText text={screenText} />
      <Keys updateState={updateState} />
    </div>
  );
}

export default Calculator;
