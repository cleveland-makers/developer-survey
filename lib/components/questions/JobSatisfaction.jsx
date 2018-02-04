import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const emoji = [
  '\u{1F603}', // Happy - 5
  '\u{1F642}', // Not as happy - 4
  '\u{1F610}', // Neutral - 3
  '\u{1F641}', // Sad - 2
  '\u{1F62D}', // Very sad - 1
];

/**
 * Asks the question:
 *
 * How statified are you are you current job?
 */
class JobSatisfaction extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveJobSatisfaction(value);
  }

  render() {
    const { careerSatisfaction, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !careerSatisfaction &&
          careerSatisfaction.length === 0 &&
          'Career satisfaction'
        }
        hintStyle={styles.highlightLabel}
        hintText="Job Satisfaction"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={careerSatisfaction}
      >
        {emoji.map(emo => (
          <MenuItem
            checked={
              careerSatisfaction.length > 0 &&
              careerSatisfaction === emo
            }
            key={emo}
            primaryText={emo}
            value={emo}
          />))}
      </SelectField>
    );
  }
}

JobSatisfaction.propTypes = {
  careerSatisfaction: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveJobSatisfaction: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

JobSatisfaction.defaultProps = {
  showValidation: false,
};

export default storeProvider()(JobSatisfaction);
