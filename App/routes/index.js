import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

/* Routes */
import DashboardScreen from './Dashboard/Dashboard';
import ChoresScreen from './Chores/Chores';
import ProfileScreen from './Profile/Profile';

const RootTabs = TabNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Chores: {
    screen: ChoresScreen,
    navigationOptions: {
      tabBarLabel: 'Chores',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootTabs;