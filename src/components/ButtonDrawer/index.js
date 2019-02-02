import React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import styles from './styles';

const Btn = ({ navigation, favorites }) => (favorites > 0 ? <Text
  onPress={() => navigation.openDrawer()}
  style={styles.menu}
>Lista</Text> : <View
  style={styles.invisivel}
/>);
const mapStateToProps = state => ({
  favorites: state.favorites.data.length,
});
export default connect(mapStateToProps)(withNavigation(Btn));

