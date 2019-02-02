import React, { Component } from 'react';
import {
  Modal, View, TouchableHighlight, Text, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as favoritesActions } from '../../store/ducks/favorites';
import styles from './styles';

class Md extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
  };

  state = {
    user: '',
  };

  hendlerAdd = async (e) => {
    e.preventDefault();
    const { addFavoriteRequest } = this.props;
    const { user } = this.state;
    await addFavoriteRequest(user);
  };

  render() {
    const { closeModal, visible } = this.props;
    const { user } = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {

        }}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.text}>Adicionar novo usuário!</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário"
              underlineColorAndroid="transparent"
              value={user}
              onChangeText={text => this.setState({ user: text })}
            />
            <View style={styles.group}>
              <TouchableHighlight
                style={[styles.button, styles.buttonCancel]}
                onPress={closeModal}
              >
                <Text style={styles.btText}>Cancelar</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={this.hendlerAdd}
              >
                <Text style={styles.btText}>salvar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  error: state.favorites.error,
  visible: state.favorites.modal,
});
const mapDispatchToProps = dispatch => bindActionCreators(favoritesActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Md);
