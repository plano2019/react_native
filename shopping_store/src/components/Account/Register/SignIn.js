import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn() {
        const { email, password } = this.state;
        console.log('Email: ' + email + ' -- ' + 'Password: ' + password);
    }

    onSignUp() {
      this.props.navigation.navigate('SignUp');
    }

    static navigationOptions = {
      title: 'Đăng Nhập Vào Hệ Thống'
    };

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View style={{backgroundColor: '#eee', flex: 1, alignItems: 'center'}}>
              <View style={{margin: 20, width: '90%'}}>
                  <TextInput
                      style={inputStyle}
                      placeholder="Enter your email"
                      value={email}
                      onChangeText={text => this.setState({ email: text })}
                      />
                  <TextInput
                      style={inputStyle}
                      placeholder="Enter your password"
                      value={password}
                      onChangeText={text => this.setState({ password: text })}
                      secureTextEntry
                      />
                </View>
                <TouchableOpacity style={bigButton} onPress={() => this.onSignIn()}>
                    <Text style={buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={bigButton} onPress={() => this.onSignUp()}>
                    <Text style={buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 20,
    },
    bigButton: {
        height: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#065B7D',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        marginBottom: 20
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#000',
        fontWeight: '400',
    }
});

export default SignIn