import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Card from './src/components/Card.js';


export default class App extends Component {

    state = {
        name: 'Shihsa',
        number: 0
    };

    onPressDetail = () => {
        this.setState({
            name: 'Misha',
        });
    };

    onPressIncrease = () => {
        this.setState({
            number: ++this.state.number,
        });
    };

    onPressDecrease = () => {
        this.setState({
            number: --this.state.number,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Card text='Drink' backgroundColor='white'/>
                <Card text='Food' />
                <Card text='Soup' />
                <Card text={this.state.name} />
                <Button
                    title='Change The Menu'
                    color='#000'
                    onPress={this.onPressDetail}
                />
                <View style={styles.buttonView}>
                    <Button title='Decrease' onPress={this.onPressDecrease}/>
                    <Card text={this.state.number} />
                    <Button title='Increase' onPress={this.onPressIncrease}/>
                </View>
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
    buttonView: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    }

});
