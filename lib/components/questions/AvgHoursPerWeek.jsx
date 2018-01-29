import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
};

/**
 * Asks the question:
 *
 * How many hours do you work per week?
 */
class AvgHoursPerWeek extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ avgHoursPerWeek: value });
    this.props.store.saveHoursPerWeek(value);
  }

  render() {
    return (
      <div style={styles.div}>
        <TextField
          type="number"
          hintText="Average Work Hours Per Week"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

AvgHoursPerWeek.propTypes = {
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveHoursPerWeek: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(AvgHoursPerWeek);
