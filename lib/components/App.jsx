import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import Confirmation from './Confirmation';
import Faq from './Faq';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarHome from './NavbarHome';
import StandardPage from './StandardPage';
import Survey from './Survey';

const styles = {
  contentRoot: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    flex: '1 0 auto',
    padding: 'var(--space) var(--space) 0',
    width: '100%',
  },
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
    this.setState(this.appState);
  }
  appState() {
    const {
      fingerprint,
      i18n,
      survey,
      surveyStep,
      surveyLength,
    } = this.props.store.getState();
    return {
      fingerprint,
      i18n,
      survey,
      surveyStep,
      surveyLength,
    };
  }
  render() {
    const {
      fingerprint,
      i18n,
      survey,
      surveyStep,
      surveyLength,
    } = this.state;
    const { location } = this.props;

    const content = {
      ...styles.content,
      backgroundColor: (location.pathname === '/') ? '#8097ad' : '#F7F5F4',
    };

    return (
      <div style={styles.contentRoot}>
        {(location.pathname === '/') ? <NavbarHome /> : <Navbar i18n={i18n} />}
        <div style={content}>
          <Switch>
            <Route exact path="/" component={Faq} />
            <Route
              exact
              path="/survey"
              render={() => (
                <StandardPage>
                  <Survey
                    survey={survey}
                    surveyStep={surveyStep}
                    surveyLength={surveyLength}
                  />
                </StandardPage>
              )}
            />
            <Route
              exact
              path="/confirmation"
              render={() => (
                <StandardPage>
                  <Confirmation
                    survey={survey}
                    surveyStep={surveyStep}
                    surveyLength={surveyLength}
                  />
                </StandardPage>
              )}
            />
          </Switch>
        </div>
        <Footer fingerprint={fingerprint} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    unsubscribe: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(App);
