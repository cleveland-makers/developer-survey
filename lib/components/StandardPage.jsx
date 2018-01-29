import React from 'react';
import FullWidthSection from './FullWidthSection';
import Navbar from './Navbar';
import Survey from './Survey';

const styles = {
  container: {
    width: '60%',
    margin: 'auto',
  },
  root: {
    overflow: 'hidden',
    minHeight: '500px',
  },
};

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
    return (
      <div style={styles.root}>
        <Navbar {...this.props} />
        <FullWidthSection>
          <div style={styles.container}>
            <Survey {...this.props} />
          </div>
        </FullWidthSection>
      </div>
    );
  }
}

export default StandardPage;
