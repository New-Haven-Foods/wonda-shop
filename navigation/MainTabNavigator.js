/* eslint-disable react/prop-types */

import ExpoIcon from '../components/ExpoIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../constants/colors';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import React from 'react';

const platformSpecificConfig = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    ...platformSpecificConfig,
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: 'Wonda Shop',
    },
  }
);

HomeStack.navigationOptions = {
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

HomeStack.path = '';

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
    HomeStack,
    LinksStack,
    SettingsStack,
  },
  {
    initialRouteName: 'HomeStack',
  }
);

tabNavigator.path = '';

export { tabNavigator as default };
