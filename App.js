import React, {Component} from 'react';

import {
Button,
ActivityIndicator,
AsyncStorage,
StatusBar,
AppRegistry,
View,
TouchableOpacity }
from 'react-native';

import {
createBottomTabNavigator,
createStackNavigator,
createAppContainer,
createDrawerNavigator,
createSwitchNavigator } from 'react-navigation';

import {
PlantsScreen,
SlideMenu
} from './src/PlantScreen';
import {CameraScreen} from './src/CameraScreen';
import {WeatherScreen} from './src/Weather';

import {LoginScreen} from './src/LoginScreen';
import {PlantsResultsScreen} from './src/PlantsResultsScreen';
import {InsertPlantForm, UpdatePlantForm} from './src/PlantForm';
import {HomeScreen} from './src/HomeScreen';
import {App as HeartTest} from './src/HeartTest';
import { NewUserForm, UpdateUserForm } from './src/UserForm';
import { ProfileScreen } from './src/ProfileScreen';
import {StatsScreen} from './src/StatsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  /* I assume that onPress, call a function that verifies with mongo the user details.
  If it's correct, THEN it'll call _signInAsync. There is also a signOutAsync function in the example
  https://snack.expo.io/@react-navigation/auth-flow-v3

  there is a getUserID() query Alec designed.
  */

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const HomeStack = createStackNavigator(
    {
        //Home: LoginScreen,
        Home: HomeScreen,
        Menu: SlideMenu,
        //Home: LoginScreen,
        Camera: CameraScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'transparent',
            },
        }
    }
);

const PlantStack = createStackNavigator({
        Plants: PlantsScreen,
        PlantsResults: PlantsResultsScreen,
        UpdatePlantForm: UpdatePlantForm

    },
    {
    }
);

const ProfileStack = createStackNavigator({
        Profile: ProfileScreen,
        EditProfile: UpdateUserForm
    },
    {
    }
);

const StatsStack = createStackNavigator({
        Statistics: StatsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'transparent',
            },
        }
    }
);

const AuthStack = createStackNavigator({
        SignIn: SignInScreen,
        //Forgot Password:
});

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

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
    Profile: ProfileStack,
    Stats: StatsStack,

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
                backgroundColor: 'white',
                color: 'white',
            }
    }
});

/*
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
*/

//disables the warnings
console.disableYellowBox=true;
export default createAppContainer(createSwitchNavigator(
{
    AuthLoading: AuthLoadingScreen,
    App: BottomTabNavigator,
    Auth: AuthStack,
},
{
    initialRouteName: 'AuthLoading',
}
));





