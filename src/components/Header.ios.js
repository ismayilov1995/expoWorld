import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.IOSHeader}>
                <Text>Header</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    IOSHeader: {
        backgroundColor: 'gray',
        padding: 20
    },
});