import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Registration from './Registration';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Faq from './Faq';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  }
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  appState = () => {
    const { i18n } = this.props.store.getState();
    return { i18n };
  }
  state = this.appState();
  onStoreChange = () => {
    this.setState(this.appState);
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    const { i18n } = this.state;
    return (
      <div>
        <Navbar i18n={i18n} />
        <Switch>
          <Route exact path="/" component={Faq} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </div>
    );
  }
}

export default App;
