import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  annotationContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  annotationFill: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secundary,
    transform: [{ scale: 0.8 }],
  },
  container: {
    flex: 1,
  },
});
