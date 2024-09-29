import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'gray',
  },
  tabBar: {
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  tab: {
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 12,
  },
});

export {styles};
