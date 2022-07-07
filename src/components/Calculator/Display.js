import PropTypes from 'prop-types';

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

export default Display;
