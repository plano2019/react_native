import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class UpdateInfo extends Component {
  constructor(props) {
     super(props);
     this.state = {
        name: '',
        phone: '',
        address: ''
     };
 }

 onRegister() {
     const { name, phone, address } = this.state;
     if(password !== confirmPassword) {
       return;
     }
     console.log({
      name, phone, address
     })
 }


 static navigationOptions = {
   title: 'Cập Nhật Thông Tin'
 };

 render() {
     const { inputStyle, bigButton, buttonText } = styles;
     const { name, phone, address } = this.state;
     return (
         <View style={{backgroundColor: '#eee', flex: 1, alignItems: 'center'}}>
           <View style={{margin: 20, width: '90%'}}>
               <TextInput
                   style={inputStyle}
                   placeholder="Name"
                   value={name}
                   onChangeText={text => this.setState({ name: text })}
                   />
               <TextInput
                   style={inputStyle}
                   placeholder="Phone"
                   value={phone}
                   onChangeText={text => this.setState({ phone: text })}
                   />
               <TextInput
                   style={inputStyle}
                   placeholder="Address"
                   value={address}
                   onChangeText={text => this.setState({ address: text })}
                   />
             </View>
             <TouchableOpacity style={bigButton} onPress={() => this.onRegister()}>
                 <Text style={buttonText}>Update</Text>
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


export default UpdateInfo
