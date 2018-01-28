import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import spacing from 'material-ui/styles/spacing';
import withWidth, { SMALL, LARGE } from 'material-ui/utils/withWidth';

const { desktopGutter } = spacing;

const styles = {
  root: {
    padding: desktopGutter,
    boxSizing: 'border-box',
  },
  content: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  rootWhenSmall: {
    paddingTop: desktopGutter * 2,
    paddingBottom: desktopGutter * 2,
  },
  rootWhenLarge: {
    paddingTop: desktopGutter * 3,
    paddingBottom: desktopGutter * 3,
  },
};

class FullWidthSection extends React.PureComponent {
  render() {
    const {
      style,
      useContent,
      contentType,
      contentStyle,
      width,
      ...other
    } = this.props;

    let content;
    if (useContent) {
      content =
        React.createElement(
          contentType,
          { style: Object.assign(styles.content, contentStyle) },
          this.props.children,
        );
    } else {
      content = this.props.children;
    }

    return (
      <ClearFix
        {...other}
        style={Object.assign(
          styles.root,
          style,
          width === SMALL && styles.rootWhenSmall,
          width === LARGE && styles.rootWhenLarge,
        )}
      >
        {content}
      </ClearFix>
    );
  }
}

FullWidthSection.propTypes = {
  children: PropTypes.node,
  contentStyle: PropTypes.object,
  contentType: PropTypes.string,
  style: PropTypes.object,
  useContent: PropTypes.bool,
  width: PropTypes.number.isRequired,
};

FullWidthSection.defaultProps = {
  useContent: false,
  contentType: 'div',
};

export default withWidth()(FullWidthSection);
