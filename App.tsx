import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.slideOne}>
            </View>
            <View style={styles.slideTwo}>
                <View style={[styles.box, styles.box1]}>

                </View>
                <View style={[styles.box, styles.box2]}>

                </View>
                <View style={[styles.box, styles.box3]}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // Flex butun ekrani migyasla bolur
    container: {
        backgroundColor: '#282a36',
        flex: 1,
        flexDirection: 'column',
    },
    slideOne: {
        backgroundColor: '#282a36',
        flex: 1,
    },
    slideTwo: {
        backgroundColor: '#d52a29',
        flex: 2,
        flexDirection: 'row'
    },
    box: {
        width: 150,
        height: 150
    },
    box1: {
        backgroundColor: '#151a54'
    },
    box2: {
        backgroundColor: '#754865'
    },
    box3: {
        backgroundColor: 'white'
    },
});
