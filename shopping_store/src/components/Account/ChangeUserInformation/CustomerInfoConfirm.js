import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';


export class CustomerInfoConfirm extends Component {
  constructor(props) {
     super(props);
     this.state = {
         name: '',
         email: '',
         phone: '',
         address: '',
     };
 }

 onContinue() {
     const { name, email, phone, address} = this.state;
     console.log({
       name, email, phone, address
     })
 }

 onPress() {
   console.log('Open screen sign up');
 }


 static navigationOptions = {
   title: 'Xác nhận thông tin khách hàng'
 };

 render() {
     const { inputStyle, bigButton, buttonText } = styles;
     const { name, email, phone, address } = this.state;
     return (
         <View style={{backgroundColor: '#eee', flex: 1, alignItems: 'center'}}>
           <View style={{margin: 20, width: '90%'}}>
               <TextInput
                   style={inputStyle}
                   placeholder="Fullname"
                   value={name}
                   onChangeText={text => this.setState({ name: text })}
                   />
               <TextInput
                   style={inputStyle}
                   placeholder="Email"
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
                   placeholder="Order Address"
                   value={address}
                   onChangeText={text => this.setState({ address: text })}
                   />
             </View>
             <TouchableOpacity style={bigButton} onPress={() => this.onContinue()}>
                 <Text style={buttonText}>Continue</Text>
             </TouchableOpacity>
             <View style={{marginTop: 80}}>
               <TouchableOpacity onPress={() => this.onPress()}>
                <Text style={{color: '#065B7D', textDecorationLine: 'underline', fontSize: 16, fontStyle:'italic'}}>
                  Đăng nhập để đặt hàng
                </Text>
               </TouchableOpacity>
             </View>
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

export default CustomerInfoConfirm
