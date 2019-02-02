import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import CustomDrawerContentComponent from './components/CustomDrawer';
import ButtonDrawer from './components/ButtonDrawer';
import { colors } from '~/styles';

const Home = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'GitHuber',
    },
  },
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    headerTintColor: colors.white,
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: colors.secundary,
    },
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
    },
    headerRight: (
      <ButtonDrawer />
    ),
    headerLeft: (
      <View
        color={colors.secundary}
      />
    ),
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home,
}, {
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: colors.secundaryDarken,
    inactiveTintColor: colors.regular,
    inactiveBackgroundColor: colors.transparent,
    itemsContainerStyle: {
      marginHorizontal: 0,
    },
    itemStyle: {
      borderBottomWidth: 1,
      borderBottomColor: colors.secundary,
    },
    labelStyle: {
      fontSize: 15,
    },
  },
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});
export default createAppContainer(DrawerNavigator);
