import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Text, AsyncStorage, Button, View} from 'react-native';
import {LoginScreen} from './LoginScreen';

export class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor(props) {
      super(props);
      state = {
        email   : '',
        password: '',
      }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abcdefg');
        this.props.navigation.navigate('App');
      };
    //_signInAsync will access our asynchronous storage to get the user token
  render() {

    return (
        <ImageBackground style={{
                                    flex: 1,
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    height: '100%',
                                    resizeMode: 'center',
                                    }}
                                    source={require('./Images/homeBack.jpg')}>
            <View style={styles.container}>

                    <View style={styles.inputContainer}>
                      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                      <TextInput style={styles.inputs}
                          placeholder="Email"
                          keyboardType="email-address"
                          underlineColorAndroid='transparent'
                          onChangeText={(email) => this.setState({email})}/>
                    </View>

                    <View style={styles.inputContainer}>
                      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                      <TextInput style={styles.inputs}
                          placeholder="Password"
                          secureTextEntry={true}
                          underlineColorAndroid='transparent'
                          onChangeText={(password) => this.setState({password})}/>
                    </View>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this._signInAsync()}>
                      <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonContainer} onPress={() => alert("Backend not connected ):")}>
                        <Text>Forgot your password?</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonContainer} onPress={() => alert("Backend not connected ):")}>
                        <Text>Register</Text>
                    </TouchableHighlight>

                  </View>
                  </ImageBackground>

    );
  }


}

/*
<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>

      */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
