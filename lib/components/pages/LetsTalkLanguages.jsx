import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import storeProvider from '../storeProvider';
import PrimaryLanguage from '../questions/PrimaryLanguage';
import SecondaryLanguages from '../questions/SecondaryLanguages';
import LanguageUses from '../questions/LanguageUses';
import YearsExpWithLanguage from '../questions/YearsExpWithLanguage';
import CodingInstitutions from '../questions/CodingInstitutions';


const styles = {
  h1: {
    marginTop: '20px',
    marginBottom: '40px',
    fontFamily: 'Play, serif',
    color: '#730006',
    textShadow: '2px 2px 5px #F24932',
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '1.08',
    textTransform: 'uppercase',
  },
  div: {
    display: 'inline-block',
    lineHeight: '45px',
    height: '48px',
    float: 'left',
    fontSize: '16px',
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
    padding: '8px 14px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    font: '14px Roboto, sans-serif',
    fontWeight: 'bold',
    marginRight: '16px',
  },
  specialMargin: {
    marginTop: '15px',
    marginBottom: '20px',
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
        <h1 style={styles.h1}>{"Let's Talk Languages"}</h1>
        <ClearFix style={styles.specialMargin}>
          <ClearFix>
            <div style={styles.answer}>
              <PrimaryLanguage
                primaryLanguage={this.props.primaryLanguage}
                updateState={this.props.updateState}
              />
            </div>
            <div style={styles.div}>is my primary work programming language.</div>
          </ClearFix>
          <ClearFix>
            <div style={styles.div}>At home, I use</div>
            <div style={styles.answer}>
              <SecondaryLanguages
                secondaryLanguages={this.props.secondaryLanguages}
                updateState={this.props.updateState}
              />
            </div>
            <div style={styles.div}>for my personal and open-source projects.</div>
          </ClearFix>
          <ClearFix>
            <div style={styles.div}>{"I've been using my primary language for"}</div>
            <div style={styles.answer}>
              <LanguageUses
                languageUses={this.props.languageUses}
                updateState={this.props.updateState}
              />
            </div>
          </ClearFix>
          <ClearFix>
            <div style={styles.div}>I learned it </div>
            <div style={styles.answer}>
              <YearsExpWithLanguage
                yearsExpWithLanguage={this.props.yearsExpWithLanguage}
                updateState={this.props.updateState}
              />
            </div>
            <div style={styles.div}>years ago from</div>
            <div style={styles.answer}>
              <CodingInstitutions
                codingInstitutions={this.props.codingInstitutions}
                updateState={this.props.updateState}
              />
            </div>
            <div style={styles.div}>.</div>
          </ClearFix>
        </ClearFix>
        <button style={styles.buttonMain} onClick={(e) => { this.previousStep(e); }}>
          Previous
        </button>
        <button style={styles.buttonMain} onClick={(e) => { this.saveAndContinue(e); }}>
          Next
        </button>
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
