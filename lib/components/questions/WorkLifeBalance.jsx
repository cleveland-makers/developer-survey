import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
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
      <div style={styles.div}>
        <SelectField
          hintText="Work/Life Balance"
          onChange={this.handleChange}
          value={careerWorkLifeBalance}
        >
          {emoji.map(emo => (
            <MenuItem
              checked={careerWorkLifeBalance.length > 0 && careerWorkLifeBalance === emo}
              insetChildren
              key={emo}
              primaryText={emo}
              value={emo}
            />))}
        </SelectField>
      </div>
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
