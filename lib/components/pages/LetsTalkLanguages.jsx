import React from 'react';
import PropTypes from 'prop-types';
import PrimaryLanguage from '../questions/PrimaryLanguage';
import SecondaryLanguages from '../questions/SecondaryLanguages';
import LanguageUses from '../questions/LanguageUses';
import YearsExpWithLanguage from '../questions/YearsExpWithLanguage';
import CodingInstitutions from '../questions/CodingInstitutions';

const styles = {
  div: {
    display: 'inline-block',
  },
};

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
        <h1>Let&#8217s Talk Languages</h1>
        <div style={styles.div}>At work, I primarily use</div>
        <PrimaryLanguage
          primaryLanguage={this.props.primaryLanguage}
          updateState={this.props.updateState}
        />
        <div style={styles.div}>At home I use</div>
        <SecondaryLanguages
          secondaryLanguages={this.props.secondaryLanguages}
          updateState={this.props.updateState}
        /><div style={styles.div}>. I&#8217ve been using my primary language for</div>
        <LanguageUses
          languageUses={this.props.languageUses}
          updateState={this.props.updateState}
        /><div style={styles.div}>. And I learned it </div>
        <YearsExpWithLanguage
          yearsExpWithLanguage={this.props.yearsExpWithLanguage}
          updateState={this.props.updateState}
        /><div style={styles.div}>years ago from</div>
        <CodingInstitutions
          codingInstitutions={this.props.codingInstitutions}
          updateState={this.props.updateState}
        /><div style={styles.div}>.</div>
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
  primaryLanguage: PropTypes.string.isRequired,
  secondaryLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
  languageUses: PropTypes.arrayOf(PropTypes.string).isRequired,
  yearsExpWithLanguage: PropTypes.number.isRequired,
  codingInstitutions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TellUsAboutYourCurrentRole;
