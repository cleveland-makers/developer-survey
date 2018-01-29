import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
  field: {
    width: 150,
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

/**
 * Asks the question:
 *
 * Why do you stay in Cleveland?
 */
class ReasonsForStayingInCleveland extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveWhyCleveland(values);
  }

  render() {
    const { personalWhyCleveland } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Reasons for Staying"
          multiple
          onChange={this.handleChange}
          style={styles.field}
          value={personalWhyCleveland}
        >
          {reasons.map(reason => (
            <MenuItem
              checked={personalWhyCleveland && personalWhyCleveland.indexOf(reason) > -1}
              insetChildren
              key={reason}
              primaryText={reason}
              value={reason}
            />))}
        </SelectField>
      </div>
    );
  }
}

ReasonsForStayingInCleveland.propTypes = {
  personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  store: PropTypes.shape({
    saveWhyCleveland: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(ReasonsForStayingInCleveland);
