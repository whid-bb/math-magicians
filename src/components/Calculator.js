/* eslint-disable max-classes-per-file */
import React from 'react';
import PropTypes from 'prop-types';

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
  const { number } = props;
  return (
    <div className="calc-display">{number}</div>
  );
}

Display.propTypes = {
  number: PropTypes.number.isRequired,
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
        <NumericKeyboardItem onClick={onClick} number="*" />
        <NumericKeyboardItem onClick={onClick} number="/" />
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
      calcDisplay: 0,
    };
  }

  handleClick() {
    const { calcDisplay } = this.state;
    return calcDisplay;
  }

  render() {
    const {
      numbers, rightButtons, calcDisplay,
    } = this.state;

    return (
      <div id="calc">
        <Display number={calcDisplay} />
        <div className="side-by-side">
          <div className="calc-column">
            <TopPan
              onClick={(event) => this.handleClick(event)}
            />
            <NumericKeyboard
              onClick={(event) => this.handleClick(event)}
              calcNumbers={numbers}
            />
          </div>
          <RightPan
            onClick={(event) => this.handleClick(event)}
            rightButtons={rightButtons}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
