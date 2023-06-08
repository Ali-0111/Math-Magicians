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
    <section className="calculator calc-wrapper">
      <header className="calc-introdcution">
        <h2>Let&apos;s do some basic calculation!</h2>
      </header>
      <div className="calc-frame">
        <ScreenText text={screenText} />
        <Keys updateState={updateState} />
      </div>
    </section>
  );
}

export default Calculator;
