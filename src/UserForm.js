import React, {Component} from 'react';
import { ScrollView ,KeyboardAvoidingView, Alert, AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

var t = require('tcomb-form-native');
var Form = t.form.Form;
// here we are: define your domain model
var User = t.struct({
  UserName: t.String,              // a required string
  Email: t.String,
  Password: t.String,
  AboutMe: t.String,
});


var options = {
    fields:{
        Email: {
            error: "Insert a valid email"
        },
        Password:{
            secureTextEntry: true
        },
        AboutMe:{
            numberOfLines: 5
        }
    }
};



export class NewUserForm extends Component {

  //USE NEW User INSERT QUERY HERE
  onPress=()=> {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of User
      console.log(value.UserName);
    }

  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
      <View style={styles.container}>

        <Form
          ref="form"
          type={User}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <View style={{height: 60}}/>
      </View>
      </ScrollView>
    );
  }
}

export class UpdateUserForm extends Component {

  //USE NEW User INSERT QUERY HERE
  onPress=()=> {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of User
      console.log(value.UserName);
    }

  }

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user', 'NO-ID');
    //const user = {name: "UpdateUserForm"};
    const updateValue = {
        UserName: user.name,
    };

    return (
      <ScrollView>
      <View style={styles.container}>

        <Form
          ref="form"
          type={User}
          options={options}
          value={updateValue}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <View style={{height: 60}}/>
      </View>
      </ScrollView>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});