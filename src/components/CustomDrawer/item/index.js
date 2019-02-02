import PropTypes from 'prop-types';
import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import styles from './styles';

const item = ({
  data: {
    name, login, avatar, url,
  },
}) => (
  <TouchableOpacity
    onPress={() => {
      Linking.openURL(url);
    }}
    onLongPress={() => {
    }}
  >
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.group}>
        <Text style={styles.titulo}>{name}</Text>
        <Text style={styles.login}>{login}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
item.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default item;
