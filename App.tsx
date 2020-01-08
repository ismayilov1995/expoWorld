import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Card from './src/components/Card.js';


export default class App extends Component {

    state = {
        name: ''
    };

    _onPressImage = () => {
        alert('Test');
    };

    // _onChangeText = text => {
    //     this.setState({
    //         name: text,
    //     });
    //
    // };

    render() {

        const {name} = this.state;

        return (
            <View style={styles.container}>
                <Text>{name}</Text>
                <TextInput
                    value={name}
                    placeholder='Type anything'
                    autoCapitalize={"sentences"}
                    onChangeText={text => {
                        this.setState({
                            name: text,
                        });
                    }}
                    style={styles.myInput}/>

                <TextInput
                    keyboardAppearance= 'dark' // Keyboard Theme
                    keyboardType={"number-pad"}
                    secureTextEntry={true}
                    style={styles.myInput}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFEB3B',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myInput: {
        width: '80%',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        paddingHorizontal: 10,
        marginBottom: 20,

    },

});
