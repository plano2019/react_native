import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class SignIn extends Component {
     constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirmPassword: ''
        };
    }

    onRegister() {
        const { name, email, phone, address, password, confirmPassword } = this.state;
        if(password !== confirmPassword) {
          return;
        }
        console.log({
          name, email, phone, address, password, confirmPassword
        })
    }


    static navigationOptions = {
      title: 'Đăng Ký Tài Khoản'
    };

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { name, email, phone, address, password, confirmPassword } = this.state;
        return (
            <View style={{backgroundColor: '#eee', flex: 1, alignItems: 'center'}}>
              <View style={{margin: 20, width: '90%'}}>
                  <TextInput
                      style={inputStyle}
                      placeholder="Fullname (*)"
                      value={name}
                      onChangeText={text => this.setState({ name: text })}
                      />
                  <TextInput
                      style={inputStyle}
                      placeholder="Email (*)"
                      value={email}
                      onChangeText={text => this.setState({ email: text })}
                      />
                  <TextInput
                      style={inputStyle}
                      placeholder="Phone number"
                      value={phone}
                      onChangeText={text => this.setState({ phone: text })}
                      />
                  <TextInput
                      style={inputStyle}
                      placeholder="Address"
                      value={address}
                      onChangeText={text => this.setState({ address: text })}
                      />
                  <TextInput
                      style={inputStyle}
                      placeholder="Password (*)"
                      value={password}
                      onChangeText={text => this.setState({ password: text })}
                      secureTextEntry
                      />
                  <TextInput
                      style={inputStyle}
                      placeholder="Confirm password (*)"
                      value={confirmPassword}
                      onChangeText={text => this.setState({ confirmPassword: text })}
                      secureTextEntry
                      />
                </View>
                <TouchableOpacity style={bigButton} onPress={() => this.onRegister()}>
                    <Text style={buttonText}>Register</Text>
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