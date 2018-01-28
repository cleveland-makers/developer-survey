import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { lightWhite, grey900 } from 'material-ui/styles/colors';

import Survey from './Survey';
import Faq from './Faq';
import Navbar from './Navbar';
import FullWidthSection from './FullWidthSection';

const styles = {
  p: {
    margin: '0 auto',
    padding: 0,
    color: lightWhite,
    maxWidth: 356,
  },
  footer: {
    backgroundColor: grey900,
    minHeight: '400px',
  },
  textAlign: 'center',
  mainContainer: {
    minHeight: '600px',
  },
};

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  }
  state = this.appState();
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  onStoreChange() {
    this.setState(this.appState);
  }
  appState() {
    const { i18n } = this.props.store.getState();
    return { i18n };
  }
  render() {
    const { i18n } = this.state;
    return (
      <div>
        <Navbar i18n={i18n} />
        <div style={styles.mainContainer}>
          <Switch>
            <Route exact path="/" component={Faq} />
            <Route exact path="/survey" component={Survey} />
          </Switch>
        </div>
        <FullWidthSection style={styles.footer}>
          <p style={styles.p}>
            {'Hand crafted with love by engineers from Cleveland. '}
          </p>
        </FullWidthSection>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
