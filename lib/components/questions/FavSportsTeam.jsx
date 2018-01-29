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

class FavSportsTeam extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ favSportTeam: value });
    this.props.store.saveSportsTeam(value);
  }

  render() {
    const { favSportTeam } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Favorite Sports Team"
          value={favSportTeam}
          onChange={this.handleChange}
        >
          {teams.map(team => (
            <MenuItem
              key={team}
              insetChildren
              checked={favSportTeam && favSportTeam.indexOf(team) > -1}
              value={team}
              primaryText={team}
            />))}
        </SelectField>
      </div>
    );
  }
}

FavSportsTeam.propTypes = {
  favSportTeam: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveSportsTeam: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(FavSportsTeam);
