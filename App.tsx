import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import Card from './src/components/Card.js';

const  { width } = Dimensions.get("window"); // Get screen width

export default class App extends Component {
    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                >
                    <Text style={styles.title}>1</Text>
                    <Text style={styles.title}>12</Text>
                    <Text style={styles.title}>13</Text>
                    <Text style={styles.title}>14</Text>
                    <Text style={styles.title}>15</Text>
                    <Text style={styles.title}>16</Text>
                    <Text style={styles.title}>17</Text>
                    <Text style={styles.title}>18</Text>
                    <Text style={styles.title}>19</Text>
                    <Text style={styles.title}>10</Text>
                    <Text style={styles.title}>11</Text>
                    <Text style={styles.title}>12</Text>
                    <Text style={styles.title}>13</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFEB3B',
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        backgroundColor: 'orange',
        borderWidth: 2,
        borderColor: 'yellow',
        marginVertical: 30,
        padding: 15,
        textAlign: 'center',
        fontSize: 36,
        width // Set screen width you can use like width: width

    },

});
