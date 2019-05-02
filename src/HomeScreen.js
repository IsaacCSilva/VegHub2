import React, {Component} from 'react';
import {ScrollView, Image, StyleSheet, WebView, Button, TouchableOpacity, View, Text} from 'react-native';

export class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            check : false
        }
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

    render() {
        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <View style ={styles.col}>
                     <View style={styles.plantTitle}>
                        <Text style ={[styles.plantTitle,{textAlign: 'left'}, {marginLeft: 15}, {fontWeight: 'bold'}]}>
                           Welcome Home, Camtono.
                        </Text>
                     </View>
                     <View style={styles.pictureBox}>
                        <Image
                            source={require('./Images/plant-3.jpg')}
                            style={styles.picture}
                            />
                     </View>

                     <View style={styles.plantBox}>
                         <Text style ={styles.headerText}> Weather </Text>
                         <View style={styles.weatherBox}>
                            <Text style ={[styles.plantTitle,{textAlign: 'left'}, {marginLeft: 10}, {fontWeight: 'bold'}]}> Michael the Ficus </Text>
                         </View>
                         <Text style ={styles.headerText}> Daily Tip </Text>
                         <View style={styles.dailyTipBox}>
                             <Text style={styles.dailyTip}> Try not to kill your plants </Text>
                         </View>
                     </View>

                 </View>
                 {this.renderWebView()}

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
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
            height: 300,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
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
                height: 180,
                marginTop: 10,
                borderRadius: 8,
                backgroundColor: 'white'
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
        color: 'black',
        textAlign:'center',
        color: 'green',

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