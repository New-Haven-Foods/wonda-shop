import ExpoIcon from '../../components/ExpoIcon';
import Button from '../../components/Button';
import dimensions from '../../constants/dimensions';
import { Header, Left, Body, Right, Button as NbButton , Container, Content, Text, Form, Item, Input } from 'native-base';
import { Image, StatusBar, ImageBackground, ScrollView, Platform, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    headerHeight: dimensions.headerHeight,
    logInUsername: '',
    logInPassword: '',
    signUpUsername: '',
    signUpEmail: '',
    signUpPassword: '',
  };

  handleSignIn = () => {
    this.props.navigation.push('AddAddress');
  };

  handleSignUp = () => {
    this.props.navigation.push('AddAddress');
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
            <ScrollView style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginVertical: 30, borderRadius: 21, paddingHorizontal: 20, width: '80%' }}>
              <Form style={{ marginTop: 30 }}>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="用户名"
                    onChange={event => this.setState({ logInUsername: event.target.value })}
                    value={this.state.logInUsername}
                  />
                </Item>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="密码"
                    onChange={event => this.setState({ logInPassword: event.target.value })}
                    value={this.state.logInPassword}
                  />
                </Item>
                <Button onPress={this.handleSignIn}>
                  登录
                </Button>
                <TouchableOpacity
                  style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                  onPress={() => {}}
                >
                  <Image source={require('../../assets/images/wechat-icon.png')} style={{ marginRight: 10, width: 30, height: 25 }} />
                  <Text style={{ color: '#603F18', fontSize: 18 }}>微信一键登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                  onPress={() => {}}
                >
                  <Image source={require('../../assets/images/facebook-icon.png')} style={{ marginRight: 15, width: 25, height: 25 }} />
                  <Text style={{ color: '#603F18', fontSize: 18 }}>脸书一键登录</Text>
                </TouchableOpacity>
              </Form>

              <Form style={{ marginTop: 90, marginBottom: 50 }}>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="用户名"
                    onChange={event => this.setState({ signUpUsername: event.target.value })}
                    value={this.state.signUpUsername}
                  />
                </Item>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="邮箱"
                    onChange={event => this.setState({ signUpEmail: event.target.value })}
                    value={this.state.signUpEmail}
                  />
                </Item>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="密码"
                    onChange={event => this.setState({ signUpPassword: event.target.value })}
                    value={this.state.signUpPassword}
                  />
                </Item>
                <Button onPress={this.handleSignUp}>
                  注册
                </Button>
              </Form>
            </ScrollView>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
