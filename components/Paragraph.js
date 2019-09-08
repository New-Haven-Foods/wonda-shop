import { Text } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraph({ children, style }) {
  return (
    <Text
      style={{
        color: '#603F18',
        fontSize: 20,
        lineHeight: 28,
        marginBottom: 20,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Paragraph.defaultProps = {
  style: {},
};
