import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header amount={100} />
        {this.props.children}
      </View>
    );
  }
}

export default Layout;
