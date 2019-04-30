import React, {Component} from 'react';

import {
AppRegistry,
View,
TouchableOpacity }
from 'react-native';

import {
createBottomTabNavigator,
createStackNavigator,
createAppContainer,
createDrawerNavigator, } from 'react-navigation';

import {
HomeScreen,
PlantsScreen,
BagScreen,
SlideMenu
} from './src/MyScreens';
import {CameraScreen} from './src/CameraScreen';
import {WeatherScreen} from './src/Weather';

import {HomeScreen as HomeTest} from './src/HomeScreen';

import {PlantsResultsScreen} from './src/PlantsResultsScreen';

import {PlantForm} from './src/PlantForm';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator(
    {
        Menu: SlideMenu,
        //Home: HomeTest,
        Camera: CameraScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
        }
    }
);

const PlantStack = createStackNavigator({
        Plants: PlantsScreen,
        PlantsResults: PlantsResultsScreen,

    },
    {
    }
);

const ProfileStack = createStackNavigator({
        Profile: PlantForm
    },
    {
    }
);


const DrawerNavigator = createDrawerNavigator({
    Home: HomeStack,
    Notifications: PlantStack,
    },
    {
        drawerWidth: 300
    }
);

const BottomTabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Plants: PlantStack,
   // Camera: CameraStack,
    Profile: ProfileStack

    },{
        navigationOptions: ({ navigation }) => ({

        //define the icon for each tab here...
        tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
    },
    }),
        tabBarOptions: {
            initialRouteName: 'Plants',
            style: {
                backgroundColor: '#00420e',
                color: 'white',
            }
    }
});

const AppStack = createStackNavigator({
    Main: BottomTabNavigator,
    Drawer: DrawerNavigator,
    },
    {
        headerMode: 'none', //removes the dumb first header
        navigationOptions:  ({ navigation }) => {

                let headerOption = {};
                if (navigation.state.routeName === 'Home') {
                    headerOption.header = null;
                }
                return {
                    headerVisible: false, //removes the dumb first header
                }
            }
    })

export default class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      route: {
        name: 'Home',
        passProps:{
          notification: props.notification
        }
      }
    };
  }
  render() {
    return (
        <App/>
    );
  }
}
AppRegistry.registerComponent('NewNavigation', () => Main);
//NECESSARY FOR REACT NATIVE 3
const App = createAppContainer(AppStack);

