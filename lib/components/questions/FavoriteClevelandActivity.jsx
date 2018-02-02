import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const activities = [
  'A Christmas Story House',
  'Cleveland Botanical Garden',
  'Cleveland Metroparks',
  'Cleveland Metroparks Zoo',
  'Cleveland Museum of Art',
  'Cleveland Museum of Natural History',
  'Cleveland Orchestra at Severance Hall',
  'Great Lakes Science Center',
  'JACK Casino',
  'Lake View Cemetery',
  'Rock & Roll Hall of Fame',
  'USS Cod',
  'West Side Market',
  'Other',
];

/**
 * Asks the question:
 *
 * What is your favorite undiscovered activity?
 */
class FavoriteClevelandActivity extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveClevelandActivity(value);
  }

  render() {
    const { personalFavoriteClevelandActivity } = this.props;
    return (
      <SelectField
        autoWidth
        hintStyle={styles.highlightLabel}
        hintText="Favorite Cleveland Activity"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={personalFavoriteClevelandActivity}
      >
        {activities.map(activity => (
          <MenuItem
            checked={personalFavoriteClevelandActivity.length > 0 && personalFavoriteClevelandActivity === activity}
            key={activity}
            primaryText={activity}
            value={activity}
          />))}
      </SelectField>
    );
  }
}

FavoriteClevelandActivity.propTypes = {
  personalFavoriteClevelandActivity: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveClevelandActivity: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(FavoriteClevelandActivity);
