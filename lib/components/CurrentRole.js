import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectFieldExampleMultiSelect extends Component {
  state = {
    values: [
      'Back-End',
      'Data Science',
      'DevOps',
      'Front-End',
      'Full-Stack',
      'Game',
      'IoT',
      'QA',
      'UX',
    ],
  };

  handleChange = (event, index, values) => this.setState({ values });

  render() {
    const { values } = this.state;
    return (
      <SelectField
        multiple
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {this.state.values.map(name => (
          <MenuItem
            key={name}
            insetChildren
            checked={values && values.indexOf(name) > -1}
            value={name}
            primaryText={name}
          />))}
      </SelectField>
    );
  }
}
