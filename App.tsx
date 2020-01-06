import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Card from './src/components/Card.js';


export default class App extends Component {

    onPressDetail = () => {
        alert('Detail');
    };

    render() {
        return (
            <View style={styles.container}>
                <Card text='Drink' backgroundColor='white'/>
                <Card text='Food'/>
                <Card text='Salad' backgroundColor='red'/>
                <Card text='Soup'/>
                <Card text='Shisha'/>
K
                <Button
                    title='detail'
                    color='#000'
                    onPress={this.onPressDetail}
                />
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

});
