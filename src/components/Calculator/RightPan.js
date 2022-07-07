import PropTypes from 'prop-types';
import NumericKeyboardItem from './NumericKeyboardItem';

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

export default RightPan;
