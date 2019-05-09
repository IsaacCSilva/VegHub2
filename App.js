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

//Imports all of the screens we need
import {LoginScreen} from './src/LoginScreen';
import {PlantsResultsScreen} from './src/PlantsResultsScreen';
import {InsertPlantForm, UpdatePlantForm} from './src/PlantForm';
import {HomeScreen} from './src/HomeScreen';
import {App as HeartTest} from './src/HeartTest';
import { NewUserForm, UpdateUserForm } from './src/UserForm';
import { ProfileScreen } from './src/ProfileScreen';
import {StatsScreen} from './src/StatsScreen';
import {SignInScreen} from './src/SignInScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Creates a stack of navigators for our Home Tab
//Contains every navigation we would go through on our home page
const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'transparent',
            },
        }
    }
);

//Creates a stack of navigators for our Plant Tab
//Contains every navigation we would go through on this page
const PlantStack = createStackNavigator({
        Plants: PlantsScreen,
        PlantsResults: PlantsResultsScreen,
        UpdatePlantForm: UpdatePlantForm,
        Camera: CameraScreen

    },
    {
    }
);

//Creates a stack of navigators for our Plant Tab
//Contains every navigation we would go through on this page
const ProfileStack = createStackNavigator({
        Profile: ProfileScreen,
        EditProfile: UpdateUserForm
    },
    {
    }
);

//Creates a stack of navigators for our Statistics Tab
//Contains every navigation we would go through on this page
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

//Creates a stack of navigators for our Authentication per User
const AuthStack = createStackNavigator({
        SignIn: SignInScreen,
        //Forgot Password:
});

//Loading Screen per our users to handle authentication
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

//Holds all of our tabs at the bottom of our screen for the user to navigate between tabs
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


//disables the warnings
console.disableYellowBox=true;

//Creates an application container that holds our ENTIRE app.
export default createAppContainer(createSwitchNavigator(
{
    AuthLoading: AuthLoadingScreen,
    App: BottomTabNavigator,
    Auth: AuthStack,
},
{
    initialRouteName: 'AuthLoading',
}
)
);





