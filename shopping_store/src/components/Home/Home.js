import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';
import Category from './Category';
import ProductPopular from './ProductPopular';
import Header from './Header';

StatusBar.setHidden(true);

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#D8D8D8', margin: 0}}>
                <Header />
                <Category />
                <ProductPopular />
            </View>
        );
    }
}