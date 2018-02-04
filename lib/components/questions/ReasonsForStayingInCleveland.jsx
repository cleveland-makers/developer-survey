import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

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
    const { personalWhyCleveland, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          personalWhyCleveland &&
          personalWhyCleveland.length === 0 &&
          'Why do you stay'
        }
        hintStyle={styles.highlightLabel}
        hintText="Reasons for Staying"
        labelStyle={styles.highlightLabel}
        multiple
        onChange={this.handleChange}
        style={styles.fieldMultipleSelect}
        value={personalWhyCleveland}
      >
        {reasons.map(reason => (
          <MenuItem
            checked={
              personalWhyCleveland &&
              personalWhyCleveland.indexOf(reason) > -1
            }
            insetChildren
            key={reason}
            primaryText={reason}
            value={reason}
          />))}
      </SelectField>
    );
  }
}

ReasonsForStayingInCleveland.propTypes = {
  personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  store: PropTypes.shape({
    saveWhyCleveland: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

ReasonsForStayingInCleveland.defaultProps = {
  showValidation: false,
};

export default storeProvider()(ReasonsForStayingInCleveland);
