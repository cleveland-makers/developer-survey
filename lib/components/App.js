import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Survey from './Survey';

import Faq from './Faq';
import Navbar from './Navbar';

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
        <Switch>
          <Route exact path="/" component={Faq} />
          <Route exact path="/survey" component={Survey} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
