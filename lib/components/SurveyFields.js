import React from 'react';
import PropTypes from 'prop-types';
// import getRadioOrCheckboxValue from '../lib/radiobox-value';


class SurveyFields extends React.PureComponent {
  nextStep() {
    this.props.saveValues({
      age: 37,
      colors: ['red'],
    });
    this.props.nextStep();
  }
  renderOptions(type, name, value, index) {
    const isChecked = () => {
      if (type === 'radio') {
        return value === this.props.fieldValues[name];
      }
      if (type === 'checkbox') {
        return this.props.fieldValues[name].indexOf(value) >= 0;
      }
      return false;
    };
    return (
      <label key={index}>
        <input type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
      </label>
    );
  }
  render() {
    return (
      <div>
        <h2>Survey Question</h2>
        <ul className="form-fields">
          <li className="radio">
            <span className="label">Age</span>
            {['18-26', '27-38', '39-50', '51-62'].map(this.renderOptions.bind(this, 'radio', 'age'))}
          </li>
          <li className="checkbox">
            <span className="label">Favorite Colors</span>
            {['Blue', 'Red', 'Orange', 'Green'].map(this.renderOptions.bind(this, 'checkbox', 'colors'))}
          </li>
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    );
  }
}

SurveyFields.propTypes = {
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  fieldValues: PropTypes.func.isRequired,
};

export default SurveyFields;
