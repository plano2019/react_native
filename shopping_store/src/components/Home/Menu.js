import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import profileIc from '../../assets/images/icons/profile.png';

export default class Menu extends Component {
    render() {
        const { container, profile, btnStyle, btnText, btnSignInStyle } = styles;
        const logoutJSX = (
            <View style={{flex: 1}}>
                <TouchableOpacity style={btnStyle}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        return (
            <View style={container}>
                <Image source={profileIc} style={profile}/>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontFamily: 'Avenir', fontSize: 20}}>Nguyen Van Anh</Text>
                    <View style={{marginTop: 50}}>
                        <TouchableOpacity style={btnSignInStyle}>
                            <Text style={btnText}>History Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle}>
                            <Text style={btnText}>Update Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle}>
                            <Text style={btnText}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle}>
                            <Text style={btnText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C536C',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },

    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },

    btnStyle: {
        height: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },

    btnText: {
        color: '#1C536C',
        fontSize: 12,
        fontWeight: 'bold',
    },

    btnSignInStyle: {
        height: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70,
        marginBottom: 10
    },
})