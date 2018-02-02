import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import OfficeHoursPerWeek from '../questions/OfficeHoursPerWeek';
import OfficeLocation from '../questions/OfficeLocation';
import CompanySize from '../questions/CompanySize';
import TotalCompensation from '../questions/TotalCompensation';
import NumCompaniesWorkedFor from '../questions/NumCompaniesWorkedFor';
import JobSatisfaction from '../questions/JobSatisfaction';
import WorkLifeBalance from '../questions/WorkLifeBalance';
import storeProvider from '../storeProvider';

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
  paper: {
    padding: '20px 30px',
  },
};

class SpeakingOfWork extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.store.previousStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.store.nextStep();
  }

  render() {
    const { survey } = this.props;
    return (
      <div>
        <Paper style={styles.paper} zDepth={1}>
          <h1 style={styles.h1}>Speaking of Work...</h1>
          <div style={styles.questionGroup}>
            <ClearFix>
              <div style={styles.div}>For my average of</div>
              <OfficeHoursPerWeek
                officeHoursPerWeek={survey.officeHoursPerWeek}
              />
              <div style={styles.div}>hours per week, I commute to</div>
              <OfficeLocation
                officeLocation={survey.officeLocation}
              />
              <div style={styles.div}>to work for a company about</div>
              <CompanySize
                officeEmployeeCount={survey.officeEmployeeCount}
              />
              <div style={styles.div}>people in size. I earn</div>
              <TotalCompensation
                careerSalary={survey.careerSalary}
              />
              <div style={styles.div}>for this work, and this is development job number</div>
              <NumCompaniesWorkedFor
                careerDevelopmentJobCount={survey.careerDevelopmentJobCount}
              />
              <div style={styles.div}>for me. I am generally</div>
              <JobSatisfaction
                careerSatisfaction={survey.careerSatisfaction}
              />
              <div style={styles.div}>at work, and I think the work/life balance is</div>
              <WorkLifeBalance
                careerWorkLifeBalance={survey.careerWorkLifeBalance}
              />
              <div style={styles.div}>.</div>
            </ClearFix>
          </div>
        </Paper>
        <div style={styles.buttonGroup}>
          <FlatButton
            label="Previous"
            onClick={this.previousStep}
            style={styles.buttonSecondary}
          />
          <RaisedButton
            backgroundColor="#730006"
            label="Next"
            labelColor="#F7F5F4"
            labelStyle={styles.buttonMainLabel}
            onClick={this.saveAndContinue}
            style={styles.buttonMain}
          />
        </div>
      </div>
    );
  }
}

SpeakingOfWork.propTypes = {
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
  }).isRequired,
  survey: PropTypes.shape({
    careerDevelopmentJobCount: PropTypes.number.isRequired,
    careerSalary: PropTypes.number.isRequired,
    careerSatisfaction: PropTypes.string.isRequired,
    careerWorkLifeBalance: PropTypes.string.isRequired,
    officeEmployeeCount: PropTypes.string.isRequired,
    officeHoursPerWeek: PropTypes.number.isRequired,
    officeLocation: PropTypes.string.isRequired,
  }).isRequired,
};

export default storeProvider()(SpeakingOfWork);
