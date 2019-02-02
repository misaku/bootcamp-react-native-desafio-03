import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Item from './item';

const CustomDrawer = ({ data }) => (
  <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <FlatList
      data={data}
      keyExtractor={it => `${it.name}-${it.id}`}
      renderItem={({ item }) => <Item data={item} />}
    />
  </SafeAreaView>
);
CustomDrawer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  data: state.favorites.data,
});
export default connect(mapStateToProps)(CustomDrawer);
