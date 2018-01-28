import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

class FavCleActivity extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ favCleActivity: value });

  render() {
    const { favCleActivity } = this.props;
    return (
      <div>
        <SelectField
          hintText="Favorite Cleveland Activity"
          value={favCleActivity}
          onChange={this.handleChange}
        >
          {activities.map(activity => (
            <MenuItem
              key={activity}
              insetChildren
              checked={favCleActivity && favCleActivity.indexOf(activity) > -1}
              value={activity}
              primaryText={activity}
            />))}
        </SelectField>
      </div>
    );
  }
}

FavCleActivity.propTypes = {
  favCleActivity: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default FavCleActivity;