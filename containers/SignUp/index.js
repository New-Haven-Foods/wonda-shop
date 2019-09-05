import ExpoIcon from '../../components/ExpoIcon';
import dimensions from '../../constants/dimensions';
import { Header, Left, Body, Right, Button, Container, Content, Text, Form, Item, Input } from 'native-base';
import { Image, StatusBar, ImageBackground, ScrollView } from 'react-native';
import React, { Component } from 'react';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    headerHeight: dimensions.headerHeight,
    mapWidth: undefined,
  };

  render() {
    return (
      <Container>
        <StatusBar hidden={true} />
        <Header
          transparent={true}
          style={{
            backgroundColor: 'black', // TODO
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
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <ExpoIcon
                name="chevron-thin-left"
                type="Entypo"
                size={20}
                color="white" // TODO
              />
            </Button>
          </Left>
          <Body style={{ flexGrow: 4, alignItems: 'center' }}>
            <Image source={require('../../assets/images/header-title.png')} />
          </Body>
          <Right>
            <Button transparent={true} onPress={() => {}}>
              <ExpoIcon
                name="menu"
                type="Feather"
                size={27}
                color="white" // TODO
              />
            </Button>
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
              paddingTop: 30,
              paddingBottom: 40,
              height: dimensions.window.height - this.state.headerHeight,
              width: dimensions.window.width,
            }}
          >
            <ScrollView style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 21, paddingHorizontal: 20, paddingTop: 30, paddingBottom: 50, width: '80%' }}>
              <Text style={{ color: '#603F18', fontSize: 24, fontWeight: '800' }}>添加收货地址</Text>

              <Form>
                <Item rounded={true} style={{ marginTop: 14, marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="地址"
                    onChange={() => {}}
                    //value={''}
                  />
                </Item>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="电话"
                    onChange={() => {}}
                    //value={''}
                  />
                </Item>
                <Item rounded={true} style={{ marginBottom: 20, borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#603F18', height: 40 }}>
                  <Input
                    style={{ paddingLeft: 15, paddingRight: 15, color: '#603F18', fontSize: 20 }}
                    placeholderTextColor="rgba(96, 63, 24, 0.5)"
                    placeholder="备注"
                    onChange={() => {}}
                    //value={''}
                  />
                </Item>

                <Image
                  onLayout={event => {
                    const { width: mapWidth } = event.nativeEvent.layout;

                    if (!this.state.mapWidth) {
                      this.setState({ mapWidth });
                    }
                  }}
                  style={{ marginBottom: 80, width: '100%', height: (this.state.mapWidth * 555 / 762) || 0 }}
                  source={require('../../assets/images/map_placeholder.png')}
                />

                <Button rounded={true} style={{ marginBottom: 70, backgroundColor: '#FF6114', justifyContent: 'center' }} onPress={() => {}}>
                  <Text style={{ paddingLeft: 0, paddingRight: 0 }}>下一步</Text>
                </Button>
              </Form>
            </ScrollView>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}
