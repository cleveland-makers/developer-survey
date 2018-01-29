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
class OfficeHoursPerWeek extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveHoursPerWeek(value);
  }

  render() {
    const { officeHoursPerWeek } = this.props;
    return (
      <div style={styles.div}>
        <TextField
          hintText="Average Work Hours Per Week"
          onChange={this.handleChange}
          type="number"
          value={officeHoursPerWeek}
        />
      </div>
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
