import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const styles = {
  div: {
    float: 'left',
  },
  customWidth: {
    width: 160,
  },
};

class YearsExp extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ yearsExp: value });

  render() {
    return (
      <div style={styles.div}>
        <TextField
          type="number"
          hintText="Number of Years"
          style={styles.customWidth}
        />
      </div>
    );
  }
}

YearsExp.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default YearsExp;
