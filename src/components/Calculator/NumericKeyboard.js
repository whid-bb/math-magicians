import PropTypes from 'prop-types';
import NumericKeyboardItem from './NumericKeyboardItem';

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

export default NumericKeyboard;
