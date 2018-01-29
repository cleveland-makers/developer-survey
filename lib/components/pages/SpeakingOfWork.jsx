import React from 'react';
import PropTypes from 'prop-types';
import OfficeHoursPerWeek from '../questions/OfficeHoursPerWeek';
import OfficeLocation from '../questions/OfficeLocation';
import CompanySize from '../questions/CompanySize';
import TotalCompensation from '../questions/TotalCompensation';
import NumCompaniesWorkedFor from '../questions/NumCompaniesWorkedFor';
import JobSatisfaction from '../questions/JobSatisfaction';
import WorkLifeBalance from '../questions/WorkLifeBalance';

class TellUsAboutYourCurrentRole extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.saveValues({});
    this.props.previousStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.saveValues({});
    this.props.nextStep();
  }

  render() {
    const { survey } = this.props;
    return (
      <div>
        <h1>Speaking of Work...</h1>
        For my average of
        <OfficeHoursPerWeek
          officeHoursPerWeek={survey.officeHoursPerWeek}
        />
        hours per week, I commute to
        <OfficeLocation
          officeLocation={survey.officeLocation}
        />
        to work for a company about
        <CompanySize
          officeEmployeeCount={survey.officeEmployeeCount}
        />.
        people in size. I earn
        <TotalCompensation
          careerSalary={survey.careerSalary}
        />
        for this work. This is development job no.
        <NumCompaniesWorkedFor
          careerDevelopmentJobCount={survey.careerDevelopmentJobCount}
        />
        for me. I am generally
        <JobSatisfaction
          careerSatisfaction={survey.careerSatisfaction}
        />
        there, and I think the work/life balance is
        <WorkLifeBalance
          careerWorkLifeBalance={survey.careerWorkLifeBalance}
        />
        <button onClick={this.previousStep}>Previous</button>
        <button onClick={this.saveAndContinue}>Next</button>
      </div>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  survey: PropTypes.shape({
    careerDevelopmentJobCount: PropTypes.number.isRequired,
    careerSalary: PropTypes.number.isRequired,
    careerSatisfaction: PropTypes.string.isRequired,
    careerWorkLifeBalance: PropTypes.string.isRequired,
    officeEmployeeCount: PropTypes.string.isRequired,
    officeHoursPerWeek: PropTypes.number.isRequired,
    officeLocation: PropTypes.string.isRequired,
  }).isRequired,
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
};

export default TellUsAboutYourCurrentRole;
