import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';
import styles from './styles';

/**
 * Asks the question:
 *
 * How many development jobs have you had?
 */
class NumCompaniesWorkedFor extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveNumberOfJobs((value) ? parseInt(value, 10) : '');
  }

  render() {
    const { careerDevelopmentJobCount, showValidation } = this.props;
    return (
      <TextField
        errorText={
          showValidation &&
          (!careerDevelopmentJobCount ||
            careerDevelopmentJobCount > 99 ||
            careerDevelopmentJobCount < 0) &&
          'Previous jobs'
        }
        hintStyle={styles.highlightLabel}
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldText}
        type="number"
        value={careerDevelopmentJobCount}
      />
    );
  }
}

NumCompaniesWorkedFor.propTypes = {
  careerDevelopmentJobCount: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveNumberOfJobs: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

NumCompaniesWorkedFor.defaultProps = {
  showValidation: false,
};

export default storeProvider()(NumCompaniesWorkedFor);
