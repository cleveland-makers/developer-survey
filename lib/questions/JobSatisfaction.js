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

class JobSatisfaction extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ jobSatisfaction: value });

  render() {
    const { jobSatisfaction } = this.props;
    return (
      <SelectField
        hintText="Job Satisfaction"
        value={jobSatisfaction}
        onChange={this.handleChange}
      >
        {emoji.map(emo => (
          <MenuItem
            key={emo}
            insetChildren
            checked={jobSatisfaction && jobSatisfaction.indexOf(emo) > -1}
            value={emo}
            primaryText={emo}
          />))}
      </SelectField>
    );
  }
}

JobSatisfaction.propTypes = {
  jobSatisfaction: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default JobSatisfaction;
