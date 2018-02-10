import { darkGrey, deepRed } from '../colors';

const styles = {
  fieldText: {
    float: 'left',
    fontSize: '20px',
    marginLeft: '4px',
    textAlign: 'right',
    width: '40px',
  },
  fieldMultipleSelect: {
    float: 'left',
    fontSize: '20px',
    margin: '0 8px',
  },
  fieldSingleSelect: {
    float: 'left',
    fontSize: '20px',
    margin: '0 8px',
  },
  highlightLabel: {
    color: deepRed,
    fontWeight: '600',
  },
  floatingLabel: {
    color: deepRed,
  },
  survey: {
    div: {
      color: darkGrey,
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
    h1: {
      color: deepRed,
      fontFamily: 'Play, serif',
      fontSize: '35px',
      fontWeight: '600',
      lineHeight: '1.08',
      marginBottom: '40px',
      marginTop: '20px',
      textShadow: '2px 2px 5px #F24932',
      textTransform: 'uppercase',
    },
  },
};

export default styles;
