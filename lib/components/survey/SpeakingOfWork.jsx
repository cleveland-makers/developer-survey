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
  questionGroup: {
    marginTop: '20px',
  },
};

class SpeakingOfWork extends React.PureComponent {
  render() {
    const { survey } = this.props;
    return (
      <React.Fragment>
        <h1 style={styles.h1}>Speaking of Work</h1>
        <div style={styles.questionGroup}>
          <ClearFix>
            <div style={styles.div}>For</div>
            <div style={styles.div}>my</div>
            <div style={styles.div}>average</div>
            <div style={styles.div}>of</div>
            <OfficeHoursPerWeek
              officeHoursPerWeek={survey.officeHoursPerWeek}
            />
            <div style={styles.div}>hours</div>
            <div style={styles.div}>per</div>
            <div style={styles.div}>week,</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>commute</div>
            <div style={styles.div}>to</div>
            <OfficeLocation
              officeLocation={survey.officeLocation}
            />
            <div style={styles.div}>to</div>
            <div style={styles.div}>work</div>
            <div style={styles.div}>for</div>
            <div style={styles.div}>a</div>
            <div style={styles.div}>company</div>
            <div style={styles.div}>about</div>
            <CompanySize
              officeEmployeeCount={survey.officeEmployeeCount}
            />
            <div style={styles.div}>people</div>
            <div style={styles.div}>in</div>
            <div style={styles.div}>size.</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>earn</div>
            <TotalCompensation
              careerSalary={survey.careerSalary}
            />
            <div style={styles.div}>for</div>
            <div style={styles.div}>this</div>
            <div style={styles.div}>work,</div>
            <div style={styles.div}>and</div>
            <div style={styles.div}>this</div>
            <div style={styles.div}>is</div>
            <div style={styles.div}>development</div>
            <div style={styles.div}>job</div>
            <div style={styles.div}>number</div>
            <NumCompaniesWorkedFor
              careerDevelopmentJobCount={survey.careerDevelopmentJobCount}
            />
            <div style={styles.div}>for</div>
            <div style={styles.div}>me.</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>am</div>
            <div style={styles.div}>generally</div>
            <JobSatisfaction
              careerSatisfaction={survey.careerSatisfaction}
            />
            <div style={styles.div}>at</div>
            <div style={styles.div}>work,</div>
            <div style={styles.div}>and</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>think</div>
            <div style={styles.div}>the</div>
            <div style={styles.div}>work/life</div>
            <div style={styles.div}>balance</div>
            <div style={styles.div}>is</div>
            <WorkLifeBalance
              careerWorkLifeBalance={survey.careerWorkLifeBalance}
            />
            <div style={styles.div}>.</div>
          </ClearFix>
        </div>
      </React.Fragment>
    );
  }
}

SpeakingOfWork.propTypes = {
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

export default SpeakingOfWork;
