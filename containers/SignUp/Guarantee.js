import ExpoIcon from '../../components/ExpoIcon';
import H1 from '../../components/H1';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import { Header, Left, Body, Right, Button as NbButton, Container, Content, Text } from 'native-base';
import { Image, StatusBar, Platform, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Guarantee extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    imageWidth: undefined,
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
          <Paragraph style={{ marginTop: 40 }}>
            旺达把您的家人当作自己的家人，我们知道您希望在购买产品时可以百分之百放心。
          </Paragraph>
          <Paragraph>
            我们和中国政府及CIC都有密切的合作关系，并且保证我们的产品的真实优质。
          </Paragraph>
          <Paragraph>
            通过下面的查询，您可以追踪境外产品的来源。
          </Paragraph>

          <Image
            onLayout={event => {
              const { width: imageWidth } = event.nativeEvent.layout;

              if (!this.state.imageWidth) {
                this.setState({ imageWidth });
              }
            }}
            style={{ marginTop: 20, width: '100%', height: (this.state.imageWidth * 93 / 311) || 0 }}
            source={require('../../assets/images/how-we-garantee.png')}
          />

          <Button style={{ marginTop: 70, marginBottom: 40 }} onPress={() => this.props.navigation.push('PrivacyPolicy')}>
            下一步
          </Button>
        </Content>
      </Container>
    );
  }
}
