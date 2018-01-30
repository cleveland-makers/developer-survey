import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

/**
 * Asks the question:
 *
 * How many hours do you work per week?
 */

const styles = {
  field: {
    marginLeft: '8px',
    float: 'left',
  },
};

class OfficeHoursPerWeek extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveHoursPerWeek(value);
  }

  render() {
    const { officeHoursPerWeek } = this.props;
    return (
      <TextField
        style={styles.field}
        hintText="Average Work Hours Per Week"
        onChange={this.handleChange}
        type="number"
        value={officeHoursPerWeek}
      />
    );
  }
}

OfficeHoursPerWeek.propTypes = {
  officeHoursPerWeek: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveHoursPerWeek: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(OfficeHoursPerWeek);
