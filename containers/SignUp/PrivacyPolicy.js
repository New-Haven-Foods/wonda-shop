import ExpoIcon from '../../components/ExpoIcon';
import H1 from '../../components/H1';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import { Header, Left, Body, Right, Button as NbButton, Container, Content, Text } from 'native-base';
import { Image, StatusBar, Platform, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class PrivacyPolicy extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <StatusBar hidden={true} />
        <Header
          transparent={true}
          style={{
            backgroundColor: '#EFE9E6',
            ...Platform.select({
              android: {
                paddingTop: StatusBar.currentHeight,
              },
            }),
            paddingLeft: 45,
            paddingRight: 45,
            height: 120,
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

        <Content style={{ paddingHorizontal: 40 }}>
          <H1 style={{ marginTop: 40, marginBottom: 30 }}>隐私条款</H1>

          <Paragraph>
            隐私条款 我们收集个人资料来改善我们的各项服务以及进行促销活动。
          </Paragraph>
          <Paragraph>
            点击下一步即表示您接受隐私条款，数据收集及cookie条款。
          </Paragraph>

          <Button style={{ marginTop: 150, marginBottom: 40 }} onPress={() => this.props.navigation.push('SignUp')}>
            下一步
          </Button>
        </Content>
      </Container>
    );
  }
}
