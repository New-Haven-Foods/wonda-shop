import ExpoIcon from '../../components/ExpoIcon';
import H1 from '../../components/H1';
import Paragraph from '../../components/Paragraph';
import dimensions from '../../constants/dimensions';
import { Header, Left, Body, Right, Button as NbButton, Container, Content } from 'native-base';
import { Image, StatusBar, ImageBackground, View, Platform } from 'react-native';
import React, { Component } from 'react';

export default class Congratulations extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    headerHeight: dimensions.headerHeight,
  };

  render() {
    return (
      <Container>
        <StatusBar hidden={true} />
        <Header
          transparent={true}
          style={{
            backgroundColor: 'rgb(241, 243, 244)',
            ...Platform.select({
              android: {
                paddingTop: StatusBar.currentHeight,
              },
            }),
            paddingLeft: 45,
            paddingRight: 45,
            height: dimensions.headerHeight,
          }}
          onLayout={event => {
            const { height } = event.nativeEvent.layout;

            if (height !== this.state.headerHeight) {
              this.setState({ headerHeight: height });
            }
          }}
        >
          <Left style={{ flexGrow: 1 }}>
            <NbButton transparent={true} onPress={() => this.props.navigation.goBack()}>
              <ExpoIcon
                name="chevron-thin-left"
                type="Entypo"
                size={16}
                color="black"
              />
            </NbButton>
          </Left>
          <Body style={{ flexGrow: 4, alignItems: 'center' }}>
            <Image source={require('../../assets/images/header-title.png')} />
          </Body>
          <Right>
            <NbButton transparent={true} onPress={() => {}}>
              <ExpoIcon
                name="menu"
                type="Feather"
                size={20}
                color="black"
              />
            </NbButton>
          </Right>
        </Header>

        <Content>
          <ImageBackground
            source={require('../../assets/images/signup-bg.png')}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: dimensions.window.height - this.state.headerHeight,
              width: dimensions.window.width,
            }}
          >
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 21, paddingHorizontal: 20, width: '80%', alignItems: 'center' }}>
              <H1 style={{ marginTop: 60, marginBottom: 15, color: '#FF6114' }}>恭喜您成为会员!</H1>

              <Paragraph style={{ width: 225, textAlign: 'center' }}>
                欢迎加入旺达大家庭。 您的订单很快就会发货。
              </Paragraph>
              <Image
                style={{ marginBottom: 50, width: 57, height: 58 }}
                source={require('../../assets/images/icon.png')}
              />
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
