import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class YearsExpWithLanguage extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ yearsExpWithLanguage: value });

  render() {
    return (
      <div>
        <TextField
          type="number"
          hintText="Number of Years"
        />
      </div>
    );
  }
}

YearsExpWithLanguage.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default YearsExpWithLanguage;
