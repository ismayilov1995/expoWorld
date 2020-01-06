import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Salam Dunya</Text>
            <Text>Necesiz?</Text>
            <View style={[styles.box, styles.box1]}>
            </View>
            <View style={[styles.box, styles.box2]}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        backgroundColor: '#ffa500',
        flex: 1,
    },
    box: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'white',
    },
    box1: {
        backgroundColor: 'aquamarine',
    },
    box2: {
        backgroundColor: 'blue',
    },
});
