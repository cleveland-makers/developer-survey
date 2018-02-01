import React from 'react';
import FullWidthSection from './FullWidthSection';

const styles = {
  container: {
    width: '60%',
    margin: 'auto',
  },
  root: {
    overflow: 'hidden',
    minHeight: '500px',
  },
};

class StandardPage extends React.PureComponent {
  render() {
    return (
      <div style={styles.root}>
        <FullWidthSection>
          <div style={styles.container}>
            {this.props.children}
          </div>
        </FullWidthSection>
      </div>
    );
  }
}

export default StandardPage;
