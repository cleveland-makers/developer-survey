import React from 'react';
import Navbar from './Navbar';
import Survey from './Survey';

let fieldValues = {
  name: null,
  email: null,
  password: null,
  age: null,
  colors: [],
};

const saveValues = fields => ((() => {
  fieldValues = Object.assign({}, fieldValues, fields);
})());

class StandardPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  state = {
    step: 1,
    currentRoles: [],
    yearsExp: 7,
  };

  updateState(state) {
    this.setState(Object.assign({}, this.state, state));
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1,
    });
  }

  render() {
    const { i18n } = this.props;
    return (
      <div style={{ minHeight: '600px' }}>
        <Navbar i18n={i18n} />
        <Survey />
      </div>
    );
  }
}

export default StandardPage;
