import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import Card from './src/components/Card.js';


export default class App extends Component {

    _onPressImage = () => {
        alert('Test');
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPressImage}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle}>My Button</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this._onPressImage}
                >
                    <Image
                        resizeMode={'center'}
                        style={{width: 100, height: 100}}
                        source={require('./src/assets/logo.png')}/>
                </TouchableOpacity>
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
    buttonTitle: {
        fontSize: 36,
    },
    buttonContainer: {
        padding: 15,
        backgroundColor: 'orange',
        borderRadius: 10,
    },

});
