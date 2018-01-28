import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i += 1) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

const roles = [
  'Back-End',
  'Data Science',
  'DevOps',
  'Front-End',
  'Full-Stack',
  'Game',
  'IoT',
  'QA',
  'UX',
];

// export default class DropDownMenuLongMenuExample extends Component {
//   state = {
//     value: 10,
//   };

//   handleChange = (event, index, value) => {
//     this.setState({ value });
//   };

//   render() {
//     return (
//       <SelectField
//         value={this.state.value}
//         onChange={this.handleChange}
//         maxHeight={200}
//       >
//         {items}
//       </SelectField>
//     );
//   }
// }

export default class SelectFieldExampleMultiSelect extends React.Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({ values });

  render() {
    const { values } = this.state;
    return (
      <SelectField
        multiple
        hintText="Select a role"
        value={values}
        onChange={this.handleChange}
      >
        {roles.map(role => (
          <MenuItem
            key={role}
            insetChildren
            checked={values && values.indexOf(role) > -1}
            value={role}
            primaryText={role}
          />))}
      </SelectField>
    );
  }
}
