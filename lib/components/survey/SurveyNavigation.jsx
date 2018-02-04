import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import storeProvider from '../storeProvider';
import SurveyFormat from './SurveyFormat';

const previousIcon = <FontIcon className="fa fa-arrow-left" />;
const nextIcon = <FontIcon className="fa fa-arrow-right" />;

const styles = {
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

    if (!this.props.validator()) {
      this.props.store.displayValidation();
      return;
    }

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
    displayValidation: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
  }).isRequired,
  validator: PropTypes.func.isRequired,
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
