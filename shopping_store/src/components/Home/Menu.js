import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { AccountService } from '../../services/AccountService';
import profileIc from '../../assets/images/icons/profile.png';
import {NavigationActions} from 'react-navigation';

export default class Menu extends Component {
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })
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
                        <TouchableOpacity style={btnSignInStyle} onPress={this.navigateToScreen('OrderHistory')}>
                            <Text style={btnText}>History Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle} onPress={this.navigateToScreen('UpdateInfo')}>
                            <Text style={btnText}>Update Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle} onPress={this.navigateToScreen('ChangePassword')}>
                            <Text style={btnText}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={btnSignInStyle} onPress={AccountService.logOut()}>
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
        // paddingHorizontal: 70
    },

    btnText: {
        color: '#1C536C',
        fontSize: 12,
        fontWeight: 'bold',
    },

    btnSignInStyle: {
        height: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 30,
        marginBottom: 10
    },
})