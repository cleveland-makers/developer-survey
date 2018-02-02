import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const teams = [
  'Browns',
  'Cavaliers',
  'Indians',
  'Monsters',
];

/**
 * Asks the question:
 *
 * What are your favorite sports teams?
 */
class FavSportsTeam extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveSportsTeam(value);
  }

  render() {
    const { personalFavoriteSportsTeams } = this.props;
    return (
      <SelectField
        autoWidth
        hintStyle={styles.highlightLabel}
        hintText="Favorite Sports Team"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={personalFavoriteSportsTeams}
      >
        {teams.map(team => (
          <MenuItem
            checked={personalFavoriteSportsTeams.length > 0 && personalFavoriteSportsTeams === team}
            key={team}
            primaryText={team}
            value={team}
          />))}
      </SelectField>
    );
  }
}

FavSportsTeam.propTypes = {
  personalFavoriteSportsTeams: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveSportsTeam: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(FavSportsTeam);
