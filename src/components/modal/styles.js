import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  group: {
    flexDirection: 'row',
  },
  buttonCancel: {
    marginRight: metrics.baseMargin / 2,
    backgroundColor: colors.light,
    marginLeft: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    flex: 1,
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin / 2,
  },
  btText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  container: {
    alignContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.hightDarkTransparent,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: metrics.basePadding * 2,
  },
  error: {
    color: colors.danger,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  titulo: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
    marginBottom: metrics.baseMargin,
    textAlign: 'center',
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    marginTop: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    alignSelf: 'stretch',
  },
  input: {
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
});
