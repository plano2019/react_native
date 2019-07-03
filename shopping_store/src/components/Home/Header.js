import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';

import icMenu from '../../assets/images/icons/menu-icon.png';
import icSearch from '../../assets/images/icons/search-icon.png';
import icCart from '../../assets/images/icons/cart-icon.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity onPress={this.props.openMenu}>
                    <Image style={ styles.navigationIcon } source={icMenu}/>
                </TouchableOpacity>
                <Text style={ styles.titleText }>Shopping</Text>
                <TouchableOpacity>
                    <Image style={ styles.iconImage } source={icSearch}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={ styles.iconImage } source={icCart}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          height: height / 12, 
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