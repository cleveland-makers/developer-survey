import React from 'react';
import PropTypes from 'prop-types';
import PrimaryLanguage from '../questions/PrimaryLanguage';
import SecondaryLanguages from '../questions/SecondaryLanguages';
import LanguageUses from '../questions/LanguageUses';
import YearsExpWithLanguage from '../questions/YearsExpWithLanguage';
import CodingInstitutions from '../questions/CodingInstitutions';

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
        <h1>{"Let's Talk Languages"}</h1>
        At work, I primarily use
        <PrimaryLanguage
          primaryLanguage={this.props.primaryLanguage}
          updateState={this.props.updateState}
        />
        At home I use
        <SecondaryLanguages
          secondaryLanguages={this.props.secondaryLanguages}
          updateState={this.props.updateState}
        />{". I've been using my primary language for "}
        <LanguageUses
          languageUses={this.props.languageUses}
          updateState={this.props.updateState}
        />.{"And I learned it "}
        <YearsExpWithLanguage
          yearsExpWithLanguage={this.props.yearsExpWithLanguage}
          updateState={this.props.updateState}
        />{"years ago from"}
        <CodingInstitutions
          codingInstitutions={this.props.codingInstitutions}
          updateState={this.props.updateState}
        />{"."}
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