import React, {Component} from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

var t = require('tcomb-form-native');
var Form = t.form.Form;
// here we are: define your domain model
var Plant = t.struct({
  PlantName: t.String,              // a required string
  NickName: t.maybe(t.String),  // an optional string
  DateOfBirth: t.Date,               // a required number
  rememberMe: t.Boolean        // a boolean
});


var options = {
    fields:{
        DateOfBirth:{
            mode: 'date',
            config:{
                dialogMode: 'spinner',
                defaultValueText: 'Select a date',
            }
        }
    }
};

//Default values
var value ={
    PlantName: "hello"
}

export class PlantForm extends Component {

  onPress=()=> {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Plant
      console.log(value.PlantName);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Plant}
          options={options}
          value={value}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
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
