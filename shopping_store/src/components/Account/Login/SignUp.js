import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AccountService } from '../../../services/AccountService';
import { firebaseApp } from '../../../services/FirebaseConfig';

export default class SignUp extends Component {
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

    register() {
        const { name, email, phone, address, password, confirmPassword } = this.state;
        const { navigate } = this.props.navigation;
        if(password !== confirmPassword) {
          return;
        }
        
        AccountService.createAccount(email, password)
            .then((user) => {
                if (firebaseApp.auth().currentUser) {
                    userId = firebaseApp.auth().currentUser.uid;
                    if (userId) {
                        firebaseApp.database().ref('users/' + userId).set({
                          address:address,
                          name:name,
                          email:email,
                          phone:phone,
                          isAdmin: false
                        })
                        .then(() => {
                            Alert.alert(
                                'Thông Báo',
                                'Tạo tài khoản thành công!',
                                [
                                    {text: 'OK', onPress: () => navigate('SignIn')}
                                ]
                            );
                        })
                        .catch(error => {
                            Alert.alert(
                                'Thông Báo',
                                'Tạo tài khoản thất bại. Xin thử lại sau!',
                                [
                                    {text: 'OK', onPress: () => navigate('SignIn')}
                                ]
                        );
                        })
                    }
                  }
                
            })
            .catch(error => {
                Alert.alert(
                    'Thông Báo',
                    'Tạo tài khoản thất bại. Xin thử lại sau!',
                    [
                        {text: 'OK', onPress: () => navigate('SignIn')}
                    ]
            );
        });

        
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
                <TouchableOpacity style={bigButton} onPress={() => this.register()}>
                    <Text style={buttonText}>Tạo tài khoản</Text>
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