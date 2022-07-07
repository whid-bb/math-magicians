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

export default NumericKeyboardItem;
