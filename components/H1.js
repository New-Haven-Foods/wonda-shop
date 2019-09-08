import { Text } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

export default function H1({ children, style }) {
  return (
    <Text style={{ marginTop: 30, color: '#603F18', fontSize: 24, fontWeight: '900', ...style }}>{children}</Text>
  );
}

H1.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

H1.defaultProps = {
  style: {},
};
