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
                            <Text style ={[styles.plantTitle,{textAlign: 'left'}, {marginLeft: 10}, {fontWeight: 'bold'}]}> Michael the Ficus </Text>
                            <Text style ={[styles.plantTitle,{textAlign: 'left'}, {marginLeft: 15}, {color: 'gray'}, {fontSize: 20}]}> Garden Plant </Text>
                         </View>
                         <View style={[styles.plantTitleBox, {height: 110}, {backgroundColor: '#ccb29d'}]}>
                             <Text style ={[styles.plantSubTitle,{textAlign: 'left'}, {marginLeft: 10}, {fontWeight: 'bold'}]}> About </Text>
                             <Text style ={styles.plantDescription}>
                                Lorem Ipsum suck a bitch motherfucker waht the fuck do you want I do gorilla warfare in the united states navy
                             </Text>
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
        backgroundColor: '#3f1d00'
    },
    plantTitleBox: {
            height: 85,
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