import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const emoji = [
  '&#x1F62D',
  '&#x1F641',
  '&#x1F610',
  '&#x1F642',
  '&#x1F603',
];

class WorkLifeBalance extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ workLifeBalance: value });

  render() {
    const { workLifeBalance } = this.props;
    return (
      <SelectField
        hintText="Work/Life Balance"
        value={workLifeBalance}
        onChange={this.handleChange}
      >
        {emoji.map(emo => (
          <MenuItem
            key={emo}
            insetChildren
            checked={workLifeBalance && workLifeBalance.indexOf(emo) > -1}
            value={emo}
            primaryText={emo}
          />))}
      </SelectField>
    );
  }
}

WorkLifeBalance.propTypes = {
  workLifeBalance: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default WorkLifeBalance;
