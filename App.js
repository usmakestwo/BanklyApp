import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { DrawerNavigator } from 'react-navigation';

import store from './store';
import RootTabs from './App/routes/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootTabs />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
