import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import StandardPage from './StandardPage';
import Faq from './Faq';
import Confirmation from './Confirmation';
import Footer from './Footer';

const styles = {
  textAlign: 'center',
};

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.appState = this.appState.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
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
    //this.setState(this.appState);
  }
  appState() {
    const { i18n } = this.props.store.getState();
    return { i18n };
  }
  render() {
    const { i18n } = this.state;
    return (
      <div>
        <div style={styles.mainContainer}>
          <Switch>
            <Route exact path="/" component={Faq} />
            <Route
              exact
              path="/survey"
              render={() => (
                <StandardPage i18n={i18n} />
              )}
            />
            <Route exact path="/confirmation" component={Confirmation} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
