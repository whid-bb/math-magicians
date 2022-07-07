import PropTypes from 'prop-types';
import NumericKeyboardItem from './NumericKeyboardItem';

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

export default TopPan;
