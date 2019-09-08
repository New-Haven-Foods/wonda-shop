/* eslint-disable react/prop-types */

import ExpoIcon from '../components/ExpoIcon';
import SignUpHomeScreen from '../containers/SignUp/';
import PromotionScreen from '../containers/SignUp/Promotion';
import GuaranteeScreen from '../containers/SignUp/Guarantee';
import PrivacyPolicyScreen from '../containers/SignUp/PrivacyPolicy';
import AddAddressScreen from '../containers/SignUp/AddAddress';
import CongratulationsScreen from '../containers/SignUp/Congratulations';
import LinksScreen from '../containers/LinksScreen';
import SettingsScreen from '../containers/SettingsScreen';
import colors from '../constants/colors';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import React from 'react';

const platformSpecificConfig = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SignUpStack = createStackNavigator(
  {
    SignUp: SignUpHomeScreen,
    Promotion: PromotionScreen,
    Guarantee: GuaranteeScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
    AddAddress: AddAddressScreen,
    Congratulations: CongratulationsScreen,
  },
  {
    ...platformSpecificConfig,
    initialRouteName: 'AddAddress',
    defaultNavigationOptions: {
      headerTitle: 'Wonda Shop',
    },
  }
);

SignUpStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  let tabBarVisible;

  if (routeName === 'SOME_ROUTE') {
    tabBarVisible = true;
  } else {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Farm',
    tabBarIcon: ({ focused }) => (
      <ExpoIcon
        name="cow"
        type="MaterialCommunityIcons"
        color={focused ? colors.tabIconSelected : colors.tabIconDefault}
        style={{ marginBottom: -3 }}
      />
    ),
  };
};

SignUpStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  {
    ...platformSpecificConfig,
    initialRouteName: 'Links',
    defaultNavigationOptions: {
      headerTitle: 'Wonda Shop',
    },
  }
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Baby',
  tabBarIcon: ({ focused }) => (
    <ExpoIcon
      type="MaterialCommunityIcons"
      name="baby-buggy"
      color={focused ? colors.tabIconSelected : colors.tabIconDefault}
      style={{ marginBottom: -3 }}
    />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    ...platformSpecificConfig,
    initialRouteName: 'Settings',
    defaultNavigationOptions: {
      headerTitle: 'Wonda Shop',
    },
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Dog',
  tabBarIcon: ({ focused }) => (
    <ExpoIcon
      name="dog"
      type="MaterialCommunityIcons"
      color={focused ? colors.tabIconSelected : colors.tabIconDefault}
      style={{ marginBottom: -3 }}
    />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack: SignUpStack,
    LinksStack,
    SettingsStack,
  },
  {
    initialRouteName: 'HomeStack',
  }
);

tabNavigator.path = '';

export { tabNavigator as default };
