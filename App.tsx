import React, {Component} from 'react';
import GlobalStyles from './GlobalStyles';
import {StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import FlatListExample from './src/components/FlatListExample.js';
import PlatformExample from './src/components/PlatformExample.js';


export default class App extends Component {

    render() {
        return (
            <SafeAreaView style={GlobalStyles.droidSafeArea}>
                <PlatformExample/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

});
