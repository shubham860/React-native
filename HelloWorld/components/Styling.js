import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

class Styling extends Component {
    render() {
        return (
            <View style={css.container}>
                <View style={css.child1}>
                    <View style={css.child11}></View>
                </View>
                <View style={css.child2}>
                    <View style={css.child21}></View>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container : {
        flex : 1
    },
    child1 : {
        backgroundColor : 'black',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-end',

    },
    child2 : {
        flex : 1,
        backgroundColor:  'red',
        alignItems:  'center'
    },
    child11 : {
        height : 80,
        width : 80,
        backgroundColor : 'red',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'red'
    },
    child21 : {
        height : 80,
        width : 80,
        backgroundColor : 'black',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'black'
    }


});

export default Styling;
