import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AccountService } from '../../../services/AccountService';
import { firebaseApp } from '../../../services/FirebaseConfig';

export default class SignIn extends Component {
     constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login(navigate) {
        const { username, password } = this.state;
        AccountService.authenticate(username, password)
        .then(() => {
            navigate('Home')
        })
        .catch(error => {
            Alert.alert(
                'Thông Báo',
                'Đăng nhập thất bại!',
                [
                  {text: 'OK', onPress: () => navigate('Home')}
                ]
              );
        })
    }

    static navigationOptions = {
      title: 'Đăng Nhập'
    };

    render() {
        const { inputStyle, bigButton, buttonText, textLink } = styles;
        const { username, password } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={{backgroundColor: '#eee', flex: 1, alignItems: 'center'}}>
              <View style={{margin: 20, width: '90%'}}>
                  <TextInput
                      style={inputStyle}
                      placeholder="Email"
                      value={username}
                      onChangeText={text => this.setState({ username: text })}
                      />
                  <TextInput
                      style={inputStyle}
                      placeholder="Password"
                      value={password}
                      onChangeText={text => this.setState({ password: text })}
                      secureTextEntry
                      />
                </View>
                <TouchableOpacity style={bigButton} 
                    onPress = {() => {this.login(navigate)}}>
                    <Text style={buttonText}>Đăng Nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={textLink} 
                    onPress = {() => navigate('SignUp')}>
                    <Text style={buttonText}>Tạo Tài Khoản</Text>
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
    },
    textLink: {
        textDecorationLine: 'underline',
        color: '#002366',
        textDecorationColor: '#002366',
        textDecorationStyle: 'solid',
        paddingTop: 200
    }
});