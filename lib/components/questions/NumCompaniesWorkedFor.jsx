import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
};

class NumCompaniesWorkedFor extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ numCompaniesWorkedFor: value });
    this.props.store.saveNumberOfJobs(value);
  }

  render() {
    return (
      <div style={styles.div}>
        <TextField
          type="number"
          hintText="Number of Companies You've Worked For"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

NumCompaniesWorkedFor.propTypes = {
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveNumberOfJobs: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(NumCompaniesWorkedFor);
