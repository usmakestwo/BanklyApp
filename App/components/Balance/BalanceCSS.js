import { StyleSheet } from 'react-native';

/**
 * Balance Stylesheet
 */
export default StyleSheet.create({
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