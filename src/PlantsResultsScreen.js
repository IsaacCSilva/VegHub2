import React, { Component } from 'react';

import { ScrollView, Image, StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';

import {Alert, AppRegistry, Platform, TouchableOpacity} from 'react-native';

export class PlantsResultsScreen extends Component {
    static navigationOptions = {
            headerStyle:{
                backgroundColor: 'transparent',
                zIndex: 100,
            },
        };

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data', 'NO-ID');

        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <View style ={styles.col}>
                     <View style={styles.pictureBox}>
                        <Image
                            source={require('./Images/plant-3.jpg')}
                            style={styles.picture}
                            />
                     </View>

                     <View style={styles.plantBox}>
                         <View style={styles.plantTitleBox}>
                            <Text style ={[styles.eventTitle,{textAlign: 'left'}, {marginLeft: 10}]}> {data} </Text>
                         </View>
                     </View>

                 </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pictureBox: {
            height: 400,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: 'steelblue'
        },
    plantBox: {
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: '#fffaf7'
    },
    plantTitleBox: {
            height: 50,
            marginLeft: 10,
            marginRight: 10,
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
    eventTitle: {
        fontFamily: 'Leixo',
        fontSize: 30,
        color: '#d33983',
        textAlign:'center',

    },
});