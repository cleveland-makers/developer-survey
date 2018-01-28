import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

const teams = [
  'Browns',
  'Cavaliers',
  'Indians',
  'Monsters',
];

class FavSportsTeam extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ favSportTeam: value });

  render() {
    const { favSportTeam } = this.props;
    return (
      <div>
        <SelectField
          style={styles.customWidth}
          hintText="Primary Language"
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
};

export default FavSportsTeam;
