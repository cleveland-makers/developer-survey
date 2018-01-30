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
class FavCleActivity extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveClevelandActivity(value);
  }

  render() {
    const { personalFavoriteClevelandActivity } = this.props;
    return (
      <SelectField
        hintText="Favorite Cleveland Activity"
        onChange={this.handleChange}
        style={styles.field}
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

FavCleActivity.propTypes = {
  personalFavoriteClevelandActivity: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveClevelandActivity: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(FavCleActivity);
