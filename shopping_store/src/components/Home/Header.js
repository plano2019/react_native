import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';

import icMenu from '../../assets/images/icons/menu-icon.png';
import icSearch from '../../assets/images/icons/search-icon.png';
import icCart from '../../assets/images/icons/cart-icon.png';

const { height } = Dimensions.get('window');
export class Header extends Component {
    openDrawer() {
        this.props.navigationProps.toggleDrawer();
    }
    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity onPress={() => this.openDrawer()}>
                    <Image style={ styles.navigationIcon } source={icMenu}/>
                </TouchableOpacity>
                <Text style={ styles.titleText }>Shopping</Text>
                <TouchableOpacity>
                    <Image style={ styles.iconImage } source={icSearch}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigationProps.navigate('Cart')}>
                    <Image style={ styles.iconImage } source={icCart}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
          backgroundColor: '#255A72',
          flexDirection: 'row', 
          justifyContent: 'space-between',
    },
    
    titleText: {
        color: 'white', 
        marginTop: 10, 
        fontSize: 25, 
        padding: 2
    },

    iconImage: {
        height: 35,
        width: 35,
        marginTop: 10,
        marginRight: 5
    },

    navigationIcon: {
        height: 35,
        width: 35,
        marginLeft: 10,
        marginTop: 10
    }

  });