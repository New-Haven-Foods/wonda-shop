import ExpoIcon from '../../components/ExpoIcon';
import H1 from '../../components/H1';
import Button from '../../components/Button';
import dimensions from '../../constants/dimensions';
import { Header, Left, Body, Right, Button as NbButton, Container, Content, Form, Item, Input } from 'native-base';
import { Image, StatusBar, ImageBackground, ScrollView, Platform } from 'react-native';
import React, { Component } from 'react';

export default class AddAddress extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    headerHeight: dimensions.headerHeight,
    mapWidth: undefined,
    address: '',
    phoneNumber: '',
    note: '',
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
              <H1>添加收货地址</H1>

              <Form>
                <Item rounded={true} style={{ marginTop: 14, marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="地址"
                    onChange={event => this.setState({ address: event.target.value })}
                    value={this.state.address}
                  />
                </Item>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="电话"
                    onChange={event => this.setState({ phoneNumber: event.target.value })}
                    value={this.state.phoneNumber}
                  />
                </Item>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="备注"
                    onChange={event => this.setState({ note: event.target.value })}
                    value={this.state.note}
                  />
                </Item>

                <Image
                  onLayout={event => {
                    const { width: mapWidth } = event.nativeEvent.layout;

                    if (!this.state.mapWidth) {
                      this.setState({ mapWidth });
                    }
                  }}
                  style={{ marginBottom: 70, width: '100%', height: (this.state.mapWidth * 555 / 762) || 0 }}
                  source={require('../../assets/images/map_placeholder.png')}
                />

                <Button style={{ marginBottom: 50 }} onPress={() => this.props.navigation.push('Congratulations')}>
                  下一步
                </Button>
              </Form>
            </ScrollView>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
