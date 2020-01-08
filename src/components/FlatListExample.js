import React, {Component} from 'react';
import GlobalStyles from '../../GlobalStyles';
import {StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import data from '../../src/temp/data.js';


export default class FlatListExample extends Component {

    state = {
        text: '',
        contacts: data
    };

    renderContentsItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={[styles.container, {backgroundColor: index % 2 === 1 ? '#fafafa' : ''}]}>
                <Image style={styles.avatar}
                       source={{uri: item.picture}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>{item.company}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    searchFilter = text => {
        const allData = data.filter(item => {
            const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
            return listItem.indexOf(text.toLowerCase()) > -1;
        });
        this.setState({
            contacts: allData,
        });

    };

    renderHeader = () => {
        const {text} = this.state;
        return (
            <View style={styles.searchContainer}>
                <TextInput
                    value={text}
                    placeholder='Search'
                    style={styles.searchInput}
                    onChangeText={text => {
                        this.setState({
                            text,
                        });
                        this.searchFilter(text);
                    }}
                />
            </View>
        );
    };

    render() {

        return (
            <FlatList
                ListHeaderComponent={this.renderHeader()}
                renderItem={this.renderContentsItem}
                keyExtractor={(item) => item._id}
                data={this.state.contacts}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textContainer: {
        justifyContent: 'space-around'
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#efefef',
        borderRadius: 15,
        padding: 10,
    },
    searchContainer: {
        padding: 10,
    },

});
