import React, { Component } from 'react';

//Weather module
import {  StyleSheet, View, Text, FlatList, Dimensions, Button, Image, ImageBackground } from 'react-native';
//import ForecastCard from './components/ForecastCard';
//import { API_KEY } from './utils/WeatherAPIKey';
import SlidingUpPanel from 'rn-sliding-up-panel';

import Svg, {Text as SvgText} from 'react-native-svg';

import ActionButton from 'react-native-action-button';

import {Alert, AppRegistry, Platform, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PlantsResultsScreen } from './PlantsResultsScreen';

import {SearchBar} from 'react-native-elements';
const DeviceWidth = Dimensions.get('window').width
const scaleVal = 0.4

// project ID = 5c92bc84f2a30baf4b46fea1
//import { findFirst1 } from './Queries/findDB';


export class SlideMenu extends Component {
     handleClick = (data) => {
            this.props.navigation.navigate(data);
        }

        static navigationOptions = {
            headerStyle:{
                backgroundColor: 'transparent',
                zIndex: 100,
            },
        };

    render() {
        return (
          <View style={{flex:1, backgroundColor: 'transparent'}}>
          <ActionButton onPress={() => this._panel.show() }
                    buttonColor="rgba(0,66,14,1)"
                    position="center"
                    offsetY={8}
                    />

            <SlidingUpPanel
                            allowDragging = {false}
                            ref={c => this._panel = c}>
                           <View style={{
                                     flex: 1,
                                     justifyContent: 'flex-end',
                                     alignItems: 'center',
                                     height: 10,
                                     marginBottom: 0,
                                   }}>
                                   <View style={{
                                   flexDirection: 'row',
                                   backgroundColor: 'transparent',
                                   width: DeviceWidth,
                                   justifyContent: 'center'}}>
                                       <View>
                                           <TouchableOpacity onPress={() => this.handleClick('Camera')}>
                                               <View style={[styles.fourSquare, {borderTopLeftRadius: 10}]}>
                                               <Text> CAMTONO BEAN </Text>
                                               <Icon name = "rocket" size = {DeviceWidth*scaleVal} color="#900" />
                                               </View>
                                           </TouchableOpacity>
                                           <TouchableOpacity onPress={() => this.handleClick("Plants")}>
                                               <View style={[styles.fourSquare, {borderBottomLeftRadius: 10}]}>
                                               </View>
                                           </TouchableOpacity>
                                       </View>
                                       <View>
                                           <TouchableOpacity onPress={() => this.handleClick('Plants')}>
                                               <View style={[styles.fourSquare, {marginLeft: 1}, {borderTopRightRadius: 10}]} />
                                           </TouchableOpacity>
                                           <TouchableOpacity onPress={() => this.handleClick('Plants')}>
                                               <View style={[styles.fourSquare, {marginLeft: 1}, {borderBottomRightRadius: 10}]} />
                                           </TouchableOpacity>
                                       </View>
                                   </View>
                               </View>
                        </SlidingUpPanel>
            </View>
        )
      }

}
export class HomeScreen extends Component {

    constructor(props){
        super(props)
        Obj = new findFirst1();
    }

    FindFirst=()=>{
        Obj.findFirst();
    }

    handleClick = (data) => {
        this.props.navigation.navigate(data);
    }

    static navigationOptions = {
        headerStyle:{
            backgroundColor: 'transparent',
            zIndex: 100,
        },
    };

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 15
        }}>
        <View style={{
        flexDirection: 'row',
        backgroundColor: "white"}}>
            <View>
                <TouchableOpacity onPress={() => this.handleClick('Camera')}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, backgroundColor: 'powderblue'}}>
                    <Text> {this.FindFirst} </Text>
                    <Icon name = "rocket" size = {DeviceWidth*scaleVal} color="#900" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleClick("Plants")}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, backgroundColor: 'skyblue'}}>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.handleClick('Camera')}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleClick('Camera')}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}

export class PlantsScreen extends Component {

    static navigationOptions = {
                headerStyle:{
                    backgroundColor: 'transparent',
                    zIndex: 100,
                },
            };
    //When uses presses a plant, navigates them to each plant's result screen
    handleClick = (data) => {
        this.props.navigation.navigate('PlantsResults', {data});
        //this.props.navigation.navigate('Home');
    }

    render() {

        //Need MongoDB Query to get this shit
        //List of JSON Objects
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        return (

            <View style={{flex:1, backgroundColor: 'white'}}>
            <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => (

            <TouchableOpacity onPress={() => this.handleClick(item.name)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <ImageBackground style ={styles.imageThumbnail} source={require('./Images/sunflower.jpg')} resizeMode='cover'>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.code}</Text>

                </ImageBackground>
                </View>
            </TouchableOpacity>

            )}
            />
            </View>
        );
    }
}


const styles = StyleSheet.create({
  fourSquare: {
      width: DeviceWidth*scaleVal,
      height: DeviceWidth*scaleVal,
      marginBottom:1,
      backgroundColor: 'powderblue'
  },
  fourSquare1: {
        width: DeviceWidth*scaleVal,
        height: DeviceWidth*scaleVal,
        marginBottom:1,
        backgroundColor: 'blue'
    },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    position: 'absolute',
    bottom: 0,
    marginLeft: 5
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
  imageThumbnail: {
    flex: 1,
    resizeMode: 'contain',
    height: undefined,
    width: undefined,
    },
  backBox:{
    flex:1,
    height: 125,
    backgroundColor: 'gray',
  }
});
