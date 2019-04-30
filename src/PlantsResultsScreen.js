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
            <ScrollView style={{backgroundColor:'gray'}}>
                <View style ={styles.col}>
                     <View style={styles.pictureBox}>
                        <Image
                            source={require('./Images/plant-1.jpg')}
                            style={styles.picture}
                            resizeMode="center"
                            />
                     </View>
                     <View style={{
                                 flex: 1,
                                 flexDirection: 'row',
                                 justifyContent: 'center',
                                 alignItems: 'stretch',
                                 marginTop: 10
                             }}>
                             <View style={{height: 50, width: 150, backgroundColor: 'red'}}>
                                 <Text style ={styles.eventTitle}>camtono </Text>
                             </View>
                             <View style={{height: 50, width: 150, backgroundColor: 'black'}}>
                                                              <Text style ={styles.eventTitle}>coachella </Text>
                              </View>

                         </View>
                 </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pictureBox: {
            height: 250,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            backgroundColor: 'steelblue'
        },
    col:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    picture: {
            flex:1,
            resizeMode: 'contain',
            alignItems: 'center',
            height: undefined,
            width: undefined
        },
    eventTitle: {
        fontFamily: 'Leixo',
        fontSize: 30,
        color: '#d33983',
        borderColor: 'white',
        borderRadius: 3,
        textAlign:'left',

    },
});