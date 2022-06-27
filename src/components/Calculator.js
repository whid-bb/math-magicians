import React from 'react';
import PropTypes from 'prop-types';

function NumericKeyboardItem(props) {
  const { itemClass, number } = props;
  return (
    <>
      <button className={itemClass} type="button">{number}</button>
    </>
  );
}

NumericKeyboardItem.propTypes = {
  number: PropTypes.string.isRequired,
  itemClass: PropTypes.string,
};
NumericKeyboardItem.defaultProps = {
  itemClass: '',
};

function NumericKeyboard() {
  return (
    <div className="numPad">
      <div className="row">
        <NumericKeyboardItem number="7" />
        <NumericKeyboardItem number="8" />
        <NumericKeyboardItem number="9" />
      </div>
      <div className="row">
        <NumericKeyboardItem number="4" />
        <NumericKeyboardItem number="5" />
        <NumericKeyboardItem number="6" />
      </div>
      <div className="row">
        <NumericKeyboardItem number="1" />
        <NumericKeyboardItem number="2" />
        <NumericKeyboardItem number="3" />
      </div>
      <div className="row">
        <NumericKeyboardItem itemClass="tworows" number="0" />
        <NumericKeyboardItem number="." />
      </div>
    </div>
  );
}

function Display(props) {
  const { number } = props;
  return (
    <div className="calc-display">{number}</div>
  );
}

Display.propTypes = {
  number: PropTypes.string.isRequired,
};

function RightPan(props) {
  const {
    rightButtons: {
      add, sub, multi, div,
    },
  } = props;

  return (
    <div className="rightPane">
      <div className="row">
        <NumericKeyboardItem number={add} />
        <NumericKeyboardItem number={sub} />
        <NumericKeyboardItem number={multi} />
        <NumericKeyboardItem number={div} />
      </div>
    </div>
  );
}

RightPan.propTypes = {
  rightButtons: PropTypes.shape({
    add: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    multi: PropTypes.string.isRequired,
    div: PropTypes.string.isRequired,
  }),
};

RightPan.defaultProps = {
  rightButtons: '',
};

function TopPan(props) {
  const {
    buttons: {
      ac, changeSign, percent,
    },
  } = props;

  return (
    <div className="topPane">
      <NumericKeyboardItem number={ac} />
      <NumericKeyboardItem number={changeSign} />
      <NumericKeyboardItem number={percent} />
    </div>
  );
}

TopPan.propTypes = {
  buttons: PropTypes.shape({
    ac: PropTypes.string.isRequired,
    changeSign: PropTypes.string.isRequired,
    percent: PropTypes.string.isRequired,
  }),
};

TopPan.defaultProps = {
  buttons: '',
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      topButtons: {
        ac: 'AC',
        changeSign: '+/-',
        percent: '%',
      },
      rightButtons: {
        add: '+',
        sub: '-',
        multi: '*',
        div: '/',
      },
    };
  }

  render() {
    const { numbers, topButtons, rightButtons } = this.state;
    return (
      <>
        <Display number="0" />
        <TopPan buttons={topButtons} />
        <div className="side-by-side">
          <NumericKeyboard numbers={numbers} />
          <RightPan rightButtons={rightButtons} />
        </div>
      </>
    );
  }
}

export default Calculator;
