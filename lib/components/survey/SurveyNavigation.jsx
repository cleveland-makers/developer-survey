import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import { withRouter } from 'react-router-dom';
import SurveyFormat from './SurveyFormat';
import storeProvider from '../storeProvider';

const previousIcon = <FontIcon className="fa fa-arrow-left" />;
const nextIcon = <FontIcon className="fa fa-arrow-right" />;

const styles = {
  h1: {
    color: '#730006',
    fontFamily: 'Play, serif',
    fontSize: '35px',
    fontWeight: '600',
    lineHeight: '1.08',
    marginBottom: '40px',
    marginTop: '20px',
    textShadow: '2px 2px 5px #F24932',
    textTransform: 'uppercase',
  },
  div: {
    color: '#343432',
    display: 'inline-block',
    float: 'left',
    fontSize: '20px',
    fontWeight: '400',
    height: '48px',
    lineHeight: '48px',
    marginLeft: '4px',
  },
  buttonMain: {
    height: '45px',
    marginRight: '16px',
    width: '110px',
  },
  buttonMainLabel: {
    lineHeight: '45px',
  },
  buttonSecondary: {
    height: '45px',
    marginRight: '16px',
    width: '110px',
  },
  questionGroup: {
    marginTop: '20px',
  },
  buttonGroup: {
    paddingTop: '30px',
  },
};

class SurveyNavigation extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.store.previousStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();

    if (this.props.nextFunc) {
      this.props.nextFunc()
        .then(() => {
          if (this.props.nextHref) {
            this.props.history.push(this.props.nextHref);
          }
        });
    } else {
      this.props.store.nextStep();
      if (this.props.nextHref) {
        this.props.history.push(this.props.nextHref);
      }
    }
  }

  render() {
    const {
      nextDisplay,
      nextLabel,
      previousDisplay,
      previousLabel,
    } = this.props;
    if (this.props.width === SMALL) {
      return (
        <React.Fragment>
          <SurveyFormat>
            {this.props.children}
          </SurveyFormat>
          <Paper>
            <BottomNavigation>
              {(previousDisplay) ? <BottomNavigationItem
                disableTouchRipple
                icon={previousIcon}
                label={previousLabel}
                onClick={this.previousStep}
              /> : ''}
              {(nextDisplay) ? <BottomNavigationItem
                disableTouchRipple
                icon={nextIcon}
                label={nextLabel}
                onClick={this.saveAndContinue}
              /> : ''}
            </BottomNavigation>
          </Paper>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <SurveyFormat>
          {this.props.children}
        </SurveyFormat>
        <div style={styles.buttonGroup}>
          {(previousDisplay) ? <FlatButton
            label={previousLabel}
            onClick={this.previousStep}
            style={styles.buttonSecondary}
          /> : ''}
          {(nextDisplay) ? <RaisedButton
            backgroundColor="#730006"
            label={nextLabel}
            labelColor="#F7F5F4"
            labelStyle={styles.buttonMainLabel}
            onClick={this.saveAndContinue}
            style={styles.buttonMain}
          /> : ''}
        </div>
      </React.Fragment>
    );
  }
}

SurveyNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  nextDisplay: PropTypes.bool,
  nextFunc: PropTypes.func,
  nextHref: PropTypes.string,
  nextLabel: PropTypes.string,
  previousDisplay: PropTypes.bool,
  previousLabel: PropTypes.string,
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

SurveyNavigation.defaultProps = {
  nextDisplay: true,
  nextFunc: null,
  nextHref: null,
  nextLabel: 'Next',
  previousDisplay: true,
  previousLabel: 'Previous',
};

export default withWidth()(withRouter(storeProvider()(SurveyNavigation)));
