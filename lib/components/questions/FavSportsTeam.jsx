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
      <div style={styles.div}>
        <SelectField
          hintText="Favorite Sports Team"
          value={personalFavoriteSportsTeams}
          onChange={this.handleChange}
        >
          {teams.map(team => (
            <MenuItem
              checked={personalFavoriteSportsTeams.length > 0 && personalFavoriteSportsTeams === team}
              insetChildren
              key={team}
              primaryText={team}
              value={team}
            />))}
        </SelectField>
      </div>
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
