import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class NumCompaniesWorkedFor extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ numCompaniesWorkedFor: value });

  render() {
    return (
      <div>
        <TextField
          type="number"
          hintText="Number of Companies You've Worked For"
        />
      </div>
    );
  }
}

NumCompaniesWorkedFor.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default NumCompaniesWorkedFor;
