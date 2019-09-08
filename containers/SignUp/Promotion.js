import ExpoIcon from '../../components/ExpoIcon';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import { Header, Left, Body, Right, Button as NbButton, Container, Content, Text } from 'native-base';
import { Image, StatusBar, Platform, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Promotion extends Component {
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
          <Paragraph style={{ marginTop: 40 }}>旺达为您提供优质有保证的海外产品。</Paragraph>
          <Paragraph>
            我们的铂金会员可以享受低价优惠。作为会员，您和家人还可以享受众多产品的优惠和促销。
          </Paragraph>
          <Paragraph>
            现在加入会员可以享受五折优惠，优惠活动仅有90天，立刻加入还有赠品等着您。
          </Paragraph>
          <Paragraph>
            点击下一步选择赠品。
          </Paragraph>

          <Button style={{ marginTop: 150, marginBottom: 40 }} onPress={() => this.props.navigation.push('Guarantee')}>
            下一步
          </Button>
        </Content>
      </Container>
    );
  }
}
