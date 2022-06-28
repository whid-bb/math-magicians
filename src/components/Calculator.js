/* eslint-disable max-classes-per-file */
import React from 'react';
import PropTypes from 'prop-types';
import calculate from './logic/calculate';

function NumericKeyboardItem(props) {
  const { itemClass, number, onClick } = props;
  return (
    <>
      <button onClick={onClick} data-func={number} className={itemClass} type="button">{number}</button>
    </>
  );
}

NumericKeyboardItem.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  itemClass: PropTypes.string,
  onClick: PropTypes.func,
};
NumericKeyboardItem.defaultProps = {
  itemClass: '',
  onClick: () => 0,
};

function NumericKeyboard(props) {
  const {
    onClick,
  } = props;

  return (
    <div className="numPad">
      <div className="row">
        <NumericKeyboardItem onClick={onClick} number="7" />
        <NumericKeyboardItem onClick={onClick} number="8" />
        <NumericKeyboardItem onClick={onClick} number="9" />
      </div>
      <div className="row">
        <NumericKeyboardItem onClick={onClick} number="4" />
        <NumericKeyboardItem onClick={onClick} number="5" />
        <NumericKeyboardItem onClick={onClick} number="6" />
      </div>
      <div className="row">
        <NumericKeyboardItem onClick={onClick} number="1" />
        <NumericKeyboardItem onClick={onClick} number="2" />
        <NumericKeyboardItem onClick={onClick} number="3" />
      </div>
      <div className="row">
        <NumericKeyboardItem onClick={onClick} itemClass="tworows" number="0" />
        <NumericKeyboardItem onClick={onClick} number="." />
      </div>
    </div>
  );
}

NumericKeyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function Display(props) {
  const {
    number: {
      total, next, operation,
    },
  } = props;
  return (
    <div className="calc-display">
      {total}
      {operation}
      {next}
    </div>
  );
}

Display.propTypes = {
  number: PropTypes.shape({
    total: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    next: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    operation: PropTypes.string,
  }),
};

Display.defaultProps = {
  number: {
    total: 0,
    next: null,
    operation: '',
  },
};

function RightPan(props) {
  const {
    onClick,
  } = props;

  return (
    <div className="rightPane">
      <div className="row">
        <NumericKeyboardItem onClick={onClick} number="+" />
        <NumericKeyboardItem onClick={onClick} number="-" />
        <NumericKeyboardItem onClick={onClick} number="x" />
        <NumericKeyboardItem onClick={onClick} number="÷" />
        <NumericKeyboardItem onClick={onClick} number="=" />
      </div>
    </div>
  );
}

RightPan.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function TopPan(props) {
  const {
    onClick,
  } = props;

  return (
    <div className="topPane">
      <NumericKeyboardItem onClick={onClick} number="AC" />
      <NumericKeyboardItem onClick={onClick} number="+/-" />
      <NumericKeyboardItem onClick={onClick} number="%" />
    </div>
  );
}

TopPan.propTypes = {
  onClick: PropTypes.func.isRequired,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(event) {
    const buttonData = event.target.dataset.func;
    this.setState((state) => calculate(state, buttonData));
  }

  render() {
    const {
      total, next, operation,
    } = this.state;

    return (
      <div id="calc">
        <Display number={{ total, next, operation }} />
        <div className="side-by-side">
          <div className="calc-column">
            <TopPan
              onClick={(e) => this.handleClick(e)}
            />
            <NumericKeyboard
              onClick={(e) => this.handleClick(e)}
            />
          </div>
          <RightPan
            onClick={(e) => this.handleClick(e)}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
