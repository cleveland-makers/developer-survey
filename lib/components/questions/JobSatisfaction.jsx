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
 * How statified are you are you current job?
 */
class JobSatisfaction extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveJobSatisfaction(value);
  }

  render() {
    const { careerSatisfaction } = this.props;
    return (
      <SelectField
        hintText="Job Satisfaction"
        onChange={this.handleChange}
        style={styles.field}
        value={careerSatisfaction}
      >
        {emoji.map(emo => (
          <MenuItem
            checked={careerSatisfaction.length > 0 && careerSatisfaction === emo}
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
};

export default storeProvider()(JobSatisfaction);
