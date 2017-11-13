import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1,
  },
  avatarContainer: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  balance: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: '#333',
    fontSize: 15,
    marginTop: 5,
  },
  balanceText: {
    color: '#000',
    fontSize: 38,
    fontWeight: '700',
  },
});

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
