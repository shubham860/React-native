import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

const css = StyleSheet.create({
    text : {
        color : 'red',
        fontSize : 50,
        textAlign : 'center',
        marginTop : 180
    }
})

class App extends Component {
    constructor() {
        super();
        this.state = {
            styles : {color : 'red'}
        }
    }

    render() {

        if(this.state.styles.color==='red'){
            setInterval(()=>{
                this.setState({
                    styles : {color : 'green'}
                })
            },3000);
        }
        else{
            setInterval(()=>{
                this.setState({
                    styles : {color : 'red'}
                })
            },3000);
        }

        return (
            <View>
                <Text style={[css.text,this.state.styles]}>Hello, world!</Text>
            </View>
        );
    }
}


export default App;
