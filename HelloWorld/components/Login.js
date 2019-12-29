import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button} from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    handler = () => {
        if(this.state.email=='Shubham.chauhan860@gmail.com' && this.state.password == "@shubham1997"){
            alert('Welcome Shubham');
        }
        else{
            alert('Incorret email or password')
        }
    }


    render() {
        return (
            <View style={css.container}>
                <Text style={css.Head}>Login to App</Text>
                <View style={css.Field}>
                    <Text style={css.text}>Email</Text>
                    <TextInput
                        onChangeText={(text) => {this.setState({email : text})}}
                        value={this.state.email}
                        style={css.email}
                        keyboardType = 'email-address' />
                </View>

                <View style={css.Field}>
                    <Text style={css.text}>Password</Text>
                    <TextInput
                        onChangeText={(text) => {this.setState({password : text})}}
                        value={this.state.password}
                        style={css.email}
                        keyboardType = 'default'
                        secureTextEntry = {true}/>
                </View>

                <View style={css.Field}>
                    <Button title={'Login'} onPress={this.handler} style={css.btn} color='#000' />
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
   container : {
       flex : 1,
       backgroundColor : '#fafafa',
       justifyContent : 'center'
   },
    Field : {
        paddingRight : 40,
        paddingLeft : 40,
        marginTop: 40
    },
    text : {
       fontSize : 20,
    },
    Head : {
       marginBottom : 10,
       fontSize: 40,
        textAlign : 'center'
    },
    email : {
        borderBottomColor : 'black',
        borderBottomWidth : 2,
        fontSize : 15,
        height : 40
    },

    btn : {
       padding : 20
    }

});

export default Login;
