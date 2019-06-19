import React, { PureComponent } from 'react';
import { Alert, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { firebaseApp } from '../../../services/FirebaseConfig';

export default class Login extends PureComponent {

    constructor(props) {
        super(props);
         this.state = {
            userName: '',
            password: ''
         }
    }
    static navigationOptions = {
        header: null
    };

    login() {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(this.state.userName, this.state.password)
            .then(() => {
                Alert.alert(
                    'Thong Bao',
                    'Dang nhap thanh cong!',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')}
                    ]
                  )
            })
            .catch(error => {
                Alert.alert(
                    'Thong Bao',
                    'Dang nhap that bai!',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')}
                    ]
                  )
            })
    };

    render() {
        return (
        <View style={styles.container}>

            <Text style={styles.title}>Login</Text>
            <TextInput 
                placeholder="Enter your username" 
                style={styles.input} 
                onChangeText={(userName) => this.setState({userName})} 
                value={this.state.userName}
            ></TextInput>
            <TextInput 
                placeholder="Enter your password" 
                style={styles.input} 
                onChangeText={(password) => this.setState({password})} 
                value={this.state.password}
            ></TextInput>

            <View style={styles.actionArea}>
                <TouchableOpacity 
                    onPress = {() => {this.login()}}
                >
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={styles.button}>Create New Account</Text>
                </TouchableOpacity>
            </View>

        </View>
        );
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'green',
    },
    input: {
        width: 300,
        height: 35,
        borderColor: 'black',
        borderWidth: 0.5,
        color: 'black',
        margin: 5,
        padding: 2
    },
    actionArea: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 0,
        marginTop: 30
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 15,
        margin: 2,
        padding: 10,
        borderRadius: 10,
        width: 180,
        textAlign: 'center'

    },
});  
