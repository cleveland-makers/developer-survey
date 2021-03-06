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
 * How would you say the work/life balance is at your current job?
 */
class WorkLifeBalance extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveWorkLifeBalance(value);
  }

  render() {
    const { careerWorkLifeBalance, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !careerWorkLifeBalance &&
          careerWorkLifeBalance.length === 0
          && 'Balance'
        }
        hintStyle={styles.highlightLabel}
        hintText={'\u{1F610}'}
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={{
          ...styles.fieldSingleSelect,
          width: '50px',
        }}
        value={careerWorkLifeBalance}
      >
        {emoji.map(emo => (
          <MenuItem
            checked={careerWorkLifeBalance.length > 0 && careerWorkLifeBalance === emo}
            key={emo}
            primaryText={emo}
            value={emo}
          />))}
      </SelectField>
    );
  }
}

WorkLifeBalance.propTypes = {
  careerWorkLifeBalance: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveWorkLifeBalance: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

WorkLifeBalance.defaultProps = {
  showValidation: false,
};

export default storeProvider()(WorkLifeBalance);
