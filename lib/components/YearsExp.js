import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'material-ui/Slider';

const styles = {
  customWidth: {
    width: 150,
  },
};

class YearsExp extends Component {
  handleYearsExpSlider = (event, value) => {
    this.props.updateState({ yearsExp: value });
  };

  render() {
    const { yearsExp } = this.props;
    return (
      <div>
        <Slider
          style={styles.customWidth}
          min={0}
          max={30}
          step={1}
          value={yearsExp}
          onChange={this.handleYearsExpSlider}
        />
        <p>
          <span>{'Value: '}{yearsExp}</span>
        </p>
      </div>
    );
  }
}

YearsExp.propTypes = {
  updateState: PropTypes.func.isRequired,
  yearsExp: PropTypes.number.isRequired,
};

export default YearsExp;
