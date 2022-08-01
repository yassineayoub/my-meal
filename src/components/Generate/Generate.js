import PropTypes from 'prop-types';

const Generate = ({ aliments }) => {
  return (
    <div>
      {aliments.map(({ name, calorie }) => <p>{name} / {calorie}cal </p>)}
    </div>
  )
}

Generate.propTypes = {
  aliments: PropTypes.string.isRequired,
}

export default Generate;