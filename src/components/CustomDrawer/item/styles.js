import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding / 2,
    borderBottomColor: colors.lighter,
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: metrics.basePadding / 2,
    borderRadius: 20,
  },
  group: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  titulo: {
    color: colors.secundary,
    fontWeight: 'bold',
  },
});
