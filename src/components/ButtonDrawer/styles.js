import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  menu:{
    padding: metrics.basePadding / 2,
    color: colors.white,
    fontSize: 14,
  },
  invisivel:{ backgroundColor:colors.secundary }
});

