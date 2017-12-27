import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './BalanceCSS';

/**
 * Balance Component
 * @param {object} props - Props
 */
const Balance = props => (
  <View style={styles.header}>
    <View style={styles.avatarContainer}>
      <Image
        source={require('../../assets/Avatar.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.userName}>Marie's Money</Text>
    </View>
    <View style={styles.balance}>
      <Text style={styles.balanceText}>${(props.amount).toFixed(2)}</Text>
    </View>
  </View>
);

Balance.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Balance;
