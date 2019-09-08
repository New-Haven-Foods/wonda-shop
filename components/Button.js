import { Button as NbButton, Text } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onPress, children, style }) {
  return (
    <NbButton rounded={true} style={{ backgroundColor: '#FF6114', justifyContent: 'center', ...style }} onPress={onPress}>
      <Text style={{ paddingLeft: 0, paddingRight: 0, fontSize: 20 }}>{children}</Text>
    </NbButton>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Button.defaultProps = {
  style: {},
};
