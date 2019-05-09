import React, {Component} from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

var t = require('tcomb-form-native');
var Form = t.form.Form;
// here we are: define your domain model
var Plant = t.struct({
  PlantName: t.String,              // a required string
  NickName: t.maybe(t.String),  // an optional string
  DateOfBirth: t.Date,               // a required number
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


export class InsertPlantForm extends Component {

  //Inserts the plants upon picture being taken
  onPress=()=> {
    // call getValue() to get the values of the form

    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Plant
      console.log(value.PlantName);
    }

  }

  render() {
    const { navigation } = this.props;
    const plant = navigation.getParam('plant', 'NO-ID');
    //Gets values from Google Vision API to autofill the form
    const insertValue = {
      PlantName: "Google Vision"
    };

    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Plant}
          options={options}
          value={insertValue}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}



export class UpdatePlantForm extends Component {

  //Calls the update query to update our plants
  onPress=()=> {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
      console.log(value.PlantName);
    }
    Alert.alert("Plant Updated!");
    this.props.navigation.goBack();
  }

  //Vuew for our update plant form
  render() {
    const { navigation } = this.props;
    const plant = navigation.getParam('plant', 'NO-ID');
    const updateValue = {
        PlantName: plant.name,
        NickName: plant.code
    };

    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Plant}
          options={options}
          value={updateValue}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button,{backgroundColor:'red'},{borderColor:'red'}]} onPress={this.onPressKill}>
                  <Text style={styles.buttonText}>KILL PLANT</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

//Styling for our views
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
