import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { View } from 'react-native';
import ListApiScreen from './ListApi';
import SettingsScreen from './Settings';
import ExplorateurScreen from './Explorateur';
import FolderScreen from './Folder';
import AddApiScreen from './AddApi';
import GridScreen from './Grid';

const HomeStack = createStackNavigator(
  {
    ListApi: ListApiScreen,
    AddApi: AddApiScreen
  },
  {
    initialRouteName: 'ListApi'
  }
);

const Tabs = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Explorateur: { screen: ExplorateurScreen },
    Folder: { screen: FolderScreen },
    Settings: { screen: SettingsScreen },
    Grid: { screen: GridScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'ios-home';
            break;
          case 'Settings':
            iconName = 'ios-list-box';
            break;
          case 'Folder':
            iconName = 'ios-archive';
            break;
          default:
            iconName = 'ios-eye';
            break;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeBackgroundColor: '#DDEBF9',
      style: {
        backgroundColor: '#ffffff'
      },
      activeTintColor: '#38aefa',
      inactiveTintColor: 'gray'
    }
  }
);

const Navigation = () => (
  <View style={{ flex: 1 }}>
    <Tabs />
  </View>
);

export default Navigation;