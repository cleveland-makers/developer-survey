import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import FontIcon from 'material-ui/FontIcon';
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
  mobileButtonNav: {
    height: 'auto',
    backgroundColor: '#7a96b0',
    color: '#343432',
    mobileOneButton: {
      width: '100%',
    },
    mobileTwoButtons: {
      width: '50%',
    },
  },
};

class SurveyNavigation extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.store.previousStep();
  }

  saveAndContinue = async (e) => {
    e.preventDefault();

    if (this.props.nextFunc) {
      const success = await this.props.nextFunc();
      if (!success) {
        console.log('error');
      }
    } else {
      await this.props.store.nextStep();
    }

    if (this.props.nextHref) {
      this.props.history.push(this.props.nextHref);
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
          <div>
            {(previousDisplay) ? <FlatButton
              disableTouchRipple
              onClick={this.previousStep}
              icon={previousIcon}
              style={(!this.props.previousDisplay) ?
                {
                  ...styles.mobileButtonNav,
                  ...styles.mobileOneButton,
                } : {
                ...styles.mobileButtonNav,
                ...styles.mobileTwoButtons,
              }}
            /> : ''}
            {(nextDisplay) ? <FlatButton
              disableTouchRipple
              backgroundColor="#730006"
              href={nextHref}
              labelStyle={styles.buttonMainLabel}
              onClick={(nextFunc) ? nextFunc : this.saveAndContinue}
              icon={nextIcon}
              style={(!this.props.previousDisplay) ?
                {
                  ...styles.mobileButtonNav,
                  ...styles.mobileOneButton,
                } : {
                ...styles.mobileButtonNav,
                ...styles.mobileTwoButtons,
              }}
            /> : ''}
          </div>
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
