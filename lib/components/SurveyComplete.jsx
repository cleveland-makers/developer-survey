import React from 'react';

const styles = {
  div: {
    margin: 'auto',
    width: '60%',
  },
};

const Loading = () => (
  <section style={styles.div}>
    <p>
      It looks like you have already completed the survey. Why not send it to a freind instead!
    </p>
  </section>
);

export default Loading;
