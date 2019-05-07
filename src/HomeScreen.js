import React, {Component} from 'react';
import {ImageBackground, AsyncStorage, Dimensions, ScrollView, Image, StyleSheet, WebView, Button, TouchableOpacity, View, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Icon from 'react-native-vector-icons/Ionicons';
import {getDailyTip} from './DailyTips';
import {WeatherScreen} from './Weather'

const DeviceWidth = Dimensions.get('window').width;
const scaleVal = 0.4;

var months =["Jan", "Feb", "March",
             "April", "May", "June",
             "July", "August", "September",
             "October", "November", "December"];

export class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            check : false,
            date: '',
            dailyTip: ''
        }
    }

    componentDidMount(){
        var that = this;
        var date = new Date().getDate(); //Current day
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        that.setState({
          date:
            months[month - 1] + ' ' + date + 'th, ' + year,
          dailyTip: getDailyTip(),
        });
    }

    renderWebView(){
        if(this.state.check){
            return(
                <WebView
                source={{uri: 'https://stackoverflow.com/questions/41236255/open-webview-on-touchableopacity-onpress-react-native'}}
                style={{marginTop: 20}}
                />
            );
            }else {
            return(
                <TouchableOpacity
                onPress={()=>this.setState({check: true})}>
                    <Text style={{fontSize: 50}}>News</Text>
                </TouchableOpacity>
            );
        }
    }

    handleClick = (data) => {
        this.props.navigation.navigate(data);
    }

    signOutAsync = async() => {
        console.log("loggin you out");
        console.log("here: ");
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
    };

    render() {

        return (
        <View>
            <ScrollView style={{backgroundColor:'white'}}>
                <View style ={styles.col}>
                     <View style={styles.plantTitle}>
                        <Text style ={[styles.plantTitle,{textAlign: 'left'}, {marginLeft: 15}, {fontWeight: 'bold'}]}>
                           Welcome Home, Camtono.
                        </Text>
                     </View>
                    <View style={styles.dateBox}>
                        <ImageBackground
                        source={require('./Images/spring.jpg')}
                        style={styles.picture}
                        >
                            <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
                                <Text style ={styles.dateIntroText}> Today is </Text>
                                <Text style ={styles.dateText}> {this.state.date} </Text>
                            </View>
                        </ImageBackground>
                    </View>

                     <View style={styles.plantBox}>
                         <Text style ={styles.headerText}> Weather </Text>
                         <View style={styles.weatherBox} >
                            <WeatherScreen />
                         </View>
                         <Text style ={styles.headerText}> Daily Tip </Text>
                         <View style={styles.dailyTipBox}>
                             <Text style={styles.dailyTip}> {this.state.dailyTip} </Text>
                         </View>
                     </View>

                 </View>
                 {this.renderWebView()}

            </ScrollView>

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
                                    <TouchableOpacity onPress={() => this.signOutAsync()}>
                                        <View style={[styles.fourSquare, {marginLeft: 1}, {backgroundColor: 'red'}, {borderBottomRightRadius: 10}]} />
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

    picture: {
        flex:1,
        resizeMode: 'cover',
        alignItems: 'center',
        height: undefined,
        width: undefined
    },
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
        backgroundColor: 'white'
    },
    fourSquare1: {
        width: DeviceWidth*scaleVal,
        height: DeviceWidth*scaleVal,
        marginBottom:1,
        backgroundColor: 'blue'
    },
    dailyTipBox: {
        height: 170,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: '#565656',
        justifyContent: 'center',
    },
    dailyTip: {
        fontFamily: 'OrangeBlossoms',
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 30,
        color: 'black',
        textAlign:'left',
        color: 'white',
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
    pictureBox: {
            height: 200,
            margin: 10,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: 'steelblue'
        },
    plantBox: {
        height: 800,
        marginTop: 10,
        backgroundColor: '#353535'
    },
    plantTitleBox: {
            height: 85,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            borderRadius: 8,
            backgroundColor: 'white'
        },
    weatherBox: {
        height: 270,
        marginTop: 10,
        borderRadius: 8,
        paddingVertical: 0,
        backgroundColor: 'white'
    },
    dateBox: {
        height: 250,
        margin: 10,
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: 'pink',
        justifyContent: 'center',
    },
    col:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    picture: {
            flex:1,
            resizeMode: 'cover',
            alignItems: 'center',
            height: undefined,
            width: undefined
        },
    plantTitle: {
        fontFamily: 'Leixo',
        fontSize: 30,
        textAlign:'center',
        color: 'green',
    },
    dateText: {
        fontFamily: 'Leixo',
        fontSize: 40,
        color: 'white',
    },
    dateIntroText: {
            fontFamily: 'Leixo',
            fontSize: 30,
            color: 'white',
    },
    plantSubTitle: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: 'black',
        textAlign:'left',

    },
    plantDescription: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: 'black',
        textAlign:'left',
        marginLeft: 10
    }
});