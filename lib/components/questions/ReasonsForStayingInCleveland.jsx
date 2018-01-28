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

const reasons = [
  'of the Pro Sports Teams',
  'of the Short Commute/Lack of Traffic',
  'of the Access to Nature',
  'of the 4 Distinct Seasons',
  'of the Affordable Housing/Cost of Living',
  'I Grew up in Cleveland',
  'of my Family',
  'Why would I leave the greatest city on Earth?',
  'of Work',
  'of Something Else',
];

class ReasonsForStayingInCleveland extends React.Component {
  handleChange = (event, index, values) => this.props.updateState({ reasonsForStayingInCleveland: values });

  render() {
    const { reasonsForStayingInCleveland } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          multiple
          hintText="Reasons for Staying"
          value={reasonsForStayingInCleveland}
          onChange={this.handleChange}
        >
          {reasons.map(reason => (
            <MenuItem
              key={reason}
              insetChildren
              checked={reasonsForStayingInCleveland && reasonsForStayingInCleveland.indexOf(reason) > -1}
              value={reason}
              primaryText={reason}
            />))}
        </SelectField>
      </div>
    );
  }
}

ReasonsForStayingInCleveland.propTypes = {
  reasonsForStayingInCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default ReasonsForStayingInCleveland;
