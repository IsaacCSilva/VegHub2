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
import Icon from 'react-native-vector-icons/Ionicons';
import { PlantsResultsScreen } from './PlantsResultsScreen';

import {SearchBar} from 'react-native-elements';
const DeviceWidth = Dimensions.get('window').width;
const scaleVal = 0.4;

// project ID = 5c92bc84f2a30baf4b46fea1
//import { findFirst1 } from './Queries/findDB';


export class SlideMenu extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor: 'transparent',
            zIndex: 100,
        },
    };

    render() {
        handleClick = (data) => {
                this.props.navigation.navigate(data);
        }
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
                           <View style={styles.fourSquareMenuContainer}>
                                   <View style={styles.fourSquareMenuRow}>
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

export class PlantsScreen extends Component {

    static navigationOptions = {
        headerStyle:{
            backgroundColor: 'transparent',
            zIndex: 100,
        },
    };

    constructor(props){
        super(props)
        this.state = {
            liked: false
        }
    }


    toggleLike = (id) => {
        this.setState(state => ({liked: !state.liked}));
    }

    //When uses presses a plant, navigates them to each plant's result screen
    handleClick = (item) => {
        this.props.navigation.navigate('PlantsResults', {item});
        //this.props.navigation.navigate('Home');
    }

    handleClickSquare = (data) => {
                this.props.navigation.navigate(data);
    }

    render() {
        //Need MongoDB Query to get this shit
        //List of JSON Objects
        const items = [
            { id: 0, name: 'TURQUOISE', code: '#1abc9c' }, { id: 1, name: 'EMERALD', code: '#2ecc71' },
            { id: 2, name: 'PETER RIVER', code: '#3498db' }, { id: 3,name: 'AMETHYST', code: '#9b59b6' },
            { id: 4, name: 'WET ASPHALT', code: '#34495e' }, { id: 5, name: 'GREEN SEA', code: '#16a085' },
            { id: 6, name: 'NEPHRITIS', code: '#27ae60' }, { id: 7, name: 'BELIZE HOLE', code: '#2980b9' },
            { id: 8, name: 'WISTERIA', code: '#8e44ad' }, { id: 9, name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { id: 10, name: 'SUN FLOWER', code: '#f1c40f' }, { id: 11, name: 'CARROT', code: '#e67e22' },
            { id: 12, name: 'ALIZARIN', code: '#e74c3c' }, { id: 13, name: 'CLOUDS', code: '#ecf0f1' },
            { id: 14, name: 'CONCRETE', code: '#95a5a6' }, { id: 15, name: 'ORANGE', code: '#f39c12' },
            { id: 16, name: 'PUMPKIN', code: '#d35400' }, { id: 17, name: 'POMEGRANATE', code: '#c0392b' },
            { id: 18, name: 'SILVER', code: '#bdc3c7' }, { id: 19, name: 'ASBESTOS', code: '#7f8c8d' },
        ];



        return (

            <View style={{flex:1, backgroundColor: 'white'}}>
            <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={({ item, index }) => (

            <TouchableOpacity onPress={() => this.handleClick(item)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <ImageBackground style ={styles.imageThumbnail} source={require('./Images/sunflower.jpg')} resizeMode='cover'>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{flex:1, alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={() => this.toggleLike(item.id)}>
                                <Image
                                  source={this.state.liked ? require('./Images/heart.png') : require('./Images/heart-outline.png')}
                                  style={{width: 40, height: 40}}
                                  resizeMode="cover"
                                />
                             </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </View>
                </ImageBackground>
                </View>
            </TouchableOpacity>

            )}
            />

                      <ActionButton onPress={() => this._panel.show() }
                                buttonColor="rgba(0,66,14,1)"
                                position="center"
                                offsetY={0}
                                />

                        <SlidingUpPanel
                                allowDragging = {false}
                                ref={c => this._panel = c}>
                               <View style={styles.fourSquareMenuContainer}>
                                       <View style={styles.fourSquareMenuRow}>
                                           <View>
                                               <TouchableOpacity onPress={() => this.handleClickSquare('Camera')}>
                                                   <View style={[styles.fourSquare, {borderTopLeftRadius: 10}]}>
                                                       <Text> CAMTONO BEAN </Text>
                                                       <Icon name = "rocket" size = {DeviceWidth*scaleVal} color="#900" />
                                                   </View>
                                               </TouchableOpacity>
                                               <TouchableOpacity onPress={() => this.handleClickSquare("Plants")}>
                                                   <View style={[styles.fourSquare, {borderBottomLeftRadius: 10}]}>
                                                   </View>
                                               </TouchableOpacity>
                                           </View>
                                           <View>
                                               <TouchableOpacity onPress={() => this.handleClickSquare('Plants')}>
                                                   <View style={[styles.fourSquare, {marginLeft: 1}, {borderTopRightRadius: 10}]} />
                                               </TouchableOpacity>
                                               <TouchableOpacity onPress={() => this.handleClickSquare('Plants')}>
                                                   <View style={[styles.fourSquare, {marginLeft: 1}, {borderBottomRightRadius: 10}]} />
                                               </TouchableOpacity>
                                           </View>
                                       </View>
                                   </View>
                            </SlidingUpPanel>

            </View>
        );
    }
}


const styles = StyleSheet.create({
  fourSquareMenuContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 10,
    marginBottom: 0,
  },
  fourSquareMenuRow: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: DeviceWidth,
    justifyContent: 'center'
    },
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
