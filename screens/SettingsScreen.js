import dimension from '../constants/dimensions';
import { Container, Content } from 'native-base';
import { Image, StyleSheet, StatusBar } from 'react-native';
import React, { Component } from 'react';

const tabBarDefaultHeight = 48.5;
const styles = StyleSheet.create({
  fullPage: {
    width: dimension.window.width,
    height: dimension.window.height - tabBarDefaultHeight,
    resizeMode: 'cover',
  },
});

export default class Settings extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={{ backgroundColor: 'orange' }}>
        <StatusBar hidden={true} />
        <Content>
          <Image style={styles.fullPage} source={require('../assets/images/dog-food-page-placeholder.png')} />
        </Content>
      </Container>
    );
  }
}
