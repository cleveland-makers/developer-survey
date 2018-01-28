import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const teams = [
  'Browns',
  'Cavaliers',
  'Indians',
  'Monsters',
];

class FavSportsTeam extends React.Component {
  state = {
    valid: true,
  }
  handleChange = (event, index, value) => {
    if (value !== 'correct') {
      event.preventDefault();
      this.setState({ valid: false });
      return;
    }
    this.props.updateState({ favSportTeam: value });
  }
  render() {
    const { favSportTeam } = this.props;
    return (
      <div>
        <SelectField
          hintText="Favorite Sports Team"
          value={favSportTeam}
          onChange={this.handleChange}
          valid={this.state.valid}
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
