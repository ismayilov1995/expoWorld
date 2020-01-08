import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Card from './src/components/Card.js';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./src/assets/logo.png')} />
                <Image
                    resizeMode={'repeat'}
                    style={{ width: '100%', height: 200, borderWidth: 2, borderColor: 'black' }}
                    source={{ uri: 'https://bower.io/img/bower-logo.png'}} />
            </View>
        );
    }
}

/*
Image Crop
resizeMode={'contain'}
    - contain
    - cover
    - center
    - repeat
    - stretch
 */

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFEB3B',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
