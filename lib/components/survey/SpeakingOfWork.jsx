import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
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
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '1.08',
    marginBottom: '40px',
    marginTop: '20px',
    textShadow: '2px 2px 5px #F24932',
    textTransform: 'uppercase',
  },
  div: {
    display: 'inline-block',
    float: 'left',
    fontSize: '16px',
    height: '48px',
    lineHeight: '45px',
  },
  answer: {
    float: 'left',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  buttonMain: {
    backgroundColor: '#730006',
    border: '2px solid #730006',
    borderRadius: '2px',
    color: '#F7F5F4',
    display: 'inline-block',
    font: '14px Roboto, sans-serif',
    fontWeight: 'bold',
    marginRight: '16px',
    padding: '8px 14px',
    textAlign: 'center',
    textDecoration: 'none',
  },
  specialMargin: {
    marginBottom: '20px',
    marginTop: '15px',
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
        <h1 style={styles.h1}>Speaking of Work...</h1>
        <div style={styles.specialMargin}>
          <ClearFix>
            <div style={styles.div}>For my average of</div>
            <div style={styles.answer}>
              <OfficeHoursPerWeek
                officeHoursPerWeek={survey.officeHoursPerWeek}
              />
            </div>
            <div style={styles.div}>hours per week, I commute to</div>
            <div style={styles.answer}>
              <OfficeLocation
                officeLocation={survey.officeLocation}
              />
            </div>
            <div style={styles.div}>to work for a company about</div>
            <div style={styles.answer}>
              <CompanySize
                officeEmployeeCount={survey.officeEmployeeCount}
              />
            </div>
            <div style={styles.div}>people in size. I earn</div>
            <div style={styles.answer}>
              <TotalCompensation
                careerSalary={survey.careerSalary}
              />
            </div>
            <div style={styles.div}>for this work. This is development job no.</div>
            <div style={styles.answer}>
              <NumCompaniesWorkedFor
                careerDevelopmentJobCount={survey.careerDevelopmentJobCount}
              />
            </div>
            <div style={styles.div}>for me. I am generally</div>
            <div style={styles.answer}>
              <JobSatisfaction
                careerSatisfaction={survey.careerSatisfaction}
              />
            </div>
            <div style={styles.div}>there, and I think the work/life balance is</div>
            <div style={styles.answer}>
              <WorkLifeBalance
                careerWorkLifeBalance={survey.careerWorkLifeBalance}
              />
            </div>
          </ClearFix>
        </div>
        <button style={styles.buttonMain} onClick={this.previousStep}>Previous</button>
        <button style={styles.buttonMain} onClick={this.saveAndContinue}>Next</button>
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
