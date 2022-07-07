import React, { useState } from 'react';
import './calc.scss';
import calculate from '../logic/calculate';
import TopPan from './TopPan';
import NumericKeyboard from './NumericKeyboard';
import Display from './Display';
import RightPan from './RightPan';

function Calculator() {
  const [calcobj, setCalcobj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const { total, next, operation } = calcobj;

  const handleClick = (event) => {
    const buttonData = event.target.dataset.func;
    setCalcobj(calculate(calcobj, buttonData));
  };

  return (
    <div id="calc">
      <Display number={{ total, next, operation }} />
      <div className="side-by-side">
        <div className="calc-column">
          <TopPan
            onClick={(e) => handleClick(e)}
          />
          <NumericKeyboard
            onClick={(e) => handleClick(e)}
          />
        </div>
        <RightPan
          onClick={(e) => handleClick(e)}
        />
      </div>
    </div>
  );
}

export default Calculator;
