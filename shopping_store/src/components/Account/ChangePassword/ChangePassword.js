import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class ChangePassword extends Component {
  constructor(props) {
     super(props);
     this.state = {
        currentPassword: '',
        password: '',
        confirmPassword: ''
     };
 }

 onRegister() {
     const { currentPassword, password, confirmPassword } = this.state;
     if(password !== confirmPassword) {
       return;
     }
     console.log({
      currentPassword, password, confirmPassword
     })
 }


 static navigationOptions = {
   title: 'Đổi Mật Khẩu'
 };

 render() {
     const { inputStyle, bigButton, buttonText } = styles;
     const { currentPassword, password, confirmPassword } = this.state;
     return (
         <View style={{backgroundColor: '#eee', flex: 1, alignItems: 'center'}}>
           <View style={{margin: 20, width: '90%'}}>
               <TextInput
                   style={inputStyle}
                   placeholder="Current Password"
                   value={currentPassword}
                   onChangeText={text => this.setState({ currentPassword: text })}
                   secureTextEntry
                   />
               <TextInput
                   style={inputStyle}
                   placeholder="New Password"
                   value={password}
                   onChangeText={text => this.setState({ password: text })}
                   secureTextEntry
                   />
               <TextInput
                   style={inputStyle}
                   placeholder="Confirm Password"
                   value={confirmPassword}
                   onChangeText={text => this.setState({ confirmPassword: text })}
                   secureTextEntry
                   />
             </View>
             <TouchableOpacity style={bigButton} onPress={() => this.onRegister()}>
                 <Text style={buttonText}>Submit</Text>
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

export default ChangePassword
