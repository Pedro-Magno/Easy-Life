import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
  containerHeader: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  containerLeft: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 15,
    backgroundColor: '#D7CFFC',
    borderRadius: 10,
  },
  iconNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7CFFC',
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  containerRight: {
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconFAQ: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#FF8110',
    width: 40,
    height: 40,
  },
  iconUser: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#D7CFFC',
    borderRadius: 50,
    width: 60,
    height: 60,
  },
 });

export default styles