import React from 'react';
import PropTypes from 'prop-types';
import AvgHoursPerWeek from '../questions/AvgHoursPerWeek';
import WorkLocation from '../questions/WorkLocation';
import CompanySize from '../questions/CompanySize';
import TotalCompensation from '../questions/TotalCompensation';
import NumCompaniesWorkedFor from '../questions/NumCompaniesWorkedFor';
import JobSatisfaction from '../questions/JobSatisfaction';
import WorkLifeBalance from '../questions/WorkLifeBalance';

class TellUsAboutYourCurrentRole extends React.PureComponent {
  previousStep(e) {
    e.preventDefault();
    this.props.saveValues({});
    this.props.previousStep();
  }
  saveAndContinue(e) {
    e.preventDefault();
    this.props.saveValues({});
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h1>{'Speaking of Work... '}</h1>
        For my average of
        <AvgHoursPerWeek
          avgHoursPerWeek={this.props.avgHoursPerWeek}
          updateState={this.props.updateState}
        />hours per week, I commute to
        <WorkLocation
          workLocation={this.props.workLocation}
          updateState={this.props.updateState}
        />{' to work for a company about'}
        <CompanySize
          companySize={this.props.companySize}
          updateState={this.props.updateState}
        />.{' people in size. I earn '}
        <TotalCompensation
          totalCompensation={this.props.totalCompensation}
          updateState={this.props.updateState}
        />{'for this work. This is development job no. '}
        <NumCompaniesWorkedFor
          numCompaniesWorkedFor={this.props.numCompaniesWorkedFor}
          updateState={this.props.updateState}
        />
        {'for me. I am generally '}
        <JobSatisfaction
          jobSatisfaction={this.props.jobSatisfaction}
          updateState={this.props.updateState}
        />{'there, and I think the work/life balance is '}
        <WorkLifeBalance
          workLifeBalance={this.props.workLifeBalance}
          updateState={this.props.updateState}
        />
        <button onClick={(e) => { this.previousStep(e); }}>Previous</button>
        <button onClick={(e) => { this.saveAndContinue(e); }}>Next</button>
      </div>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  avgHoursPerWeek: PropTypes.number.isRequired,
  workLocation: PropTypes.string.isRequired,
  companySize: PropTypes.string.isRequired,
  totalCompensation: PropTypes.number.isRequired,
  numCompaniesWorkedFor: PropTypes.number.isRequired,
  jobSatisfaction: PropTypes.string.isRequired,
  workLifeBalance: PropTypes.string.isRequired,
};

export default TellUsAboutYourCurrentRole;
