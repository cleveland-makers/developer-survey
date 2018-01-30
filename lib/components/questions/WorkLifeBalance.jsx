import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  field: {
    float: 'left',
    fontSize: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
};

const emoji = [
  '&#x1F62D',
  '&#x1F641',
  '&#x1F610',
  '&#x1F642',
  '&#x1F603',
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
    const { careerWorkLifeBalance } = this.props;
    return (
      <SelectField
        autoWidth
        hintText="Work/Life Balance"
        onChange={this.handleChange}
        style={styles.field}
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
};

export default storeProvider()(WorkLifeBalance);
