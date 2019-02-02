import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View, StatusBar, Image, TouchableOpacity, Linking, PermissionsAndroid,
} from 'react-native';
import { colors } from '~/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import { Creators as favoritesActions } from '~/store/ducks/favorites';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Geolocation from 'react-native-geolocation-service';
import Md from '~/components/modal';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXNramFwYSIsImEiOiJjanJsNDN5YjAwNGtsM3lwYmc2YjVxZmp1In0.kO10FgCSeGc2dBXqwiWhTw',
);
const StyleMap = MapboxGL.StyleURL.Street;

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]),
      modal: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
          },
        ),
      ).isRequired,
    }).isRequired,
    startModal: PropTypes.func.isRequired,
  };


  state = {
    coords: {
      latitude: -27.2177659,
      longitude: -49.6451598,
    },
  };

  async componentDidMount() {
    if (await this.requestPermissionLocation()) {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ coords: { ...position.coords } });
        },
        (error) => {
          // See error code charts below.
          console.error(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    }
  }

  requestPermissionLocation = async () => {
    let granted = await PermissionsAndroid
      .check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    try {
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        granted = await PermissionsAndroid
          .request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Permissão de geolocalização',
              message: `Precisamos de sua autorização
            para cessar sua localização:`,
              buttonNeutral: 'perguntar depois',
              buttonNegative: 'cancelar',
              buttonPositive: 'OK',
            },
          );
      }
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  handleMapClick = ({ geometry: { coordinates: [longitude, latitude] } }) => {
    const { startModal } = this.props;
    startModal({
      latitude,
      longitude,
    });
  };

  renderAnnotations = ({
    id, geolocation: { longitude, latitude }, name, avatar, login, bio,
  }) => (
    <MapboxGL.PointAnnotation
      id={name + id}
      key={name + id}
      coordinate={[longitude, latitude]}
    >
      <View style={styles.annotationContainer}>
        <Image
          style={styles.annotationFill}
          source={{ uri: avatar }}
        />
      </View>
      <MapboxGL.Callout title={
       `${name} (${login})
      "${bio}"`}
      />
    </MapboxGL.PointAnnotation>
  );

  render() {
    const { coords: { latitude, longitude } } = this.state;
    const { favorites } = this.props;
    return (
      <Fragment>
        <Md />
        <MapboxGL.MapView
          animated
          centerCoordinate={[longitude, latitude]}
          style={styles.container}
          zoomLevel={16}
          showUserLocation
          styleURL={StyleMap}
          onLongPress={this.handleMapClick}
        >
          <StatusBar barStyle="light-content" backgroundColor={colors.secundaryHightDarken} />
          {favorites.data.map(this.renderAnnotations)}
        </MapboxGL.MapView>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(favoritesActions, dispatch);
const mapStateToProps = state => ({
  favorites: state.favorites,
});
export default connect(
  mapStateToProps, mapDispatchToProps,
)(Main);
