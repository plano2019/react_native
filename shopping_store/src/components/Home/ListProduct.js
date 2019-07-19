import React , { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Header from '../Home/Header';

import back from '../../assets/images/categories/arrowleft.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebaseApp } from '../../services/FirebaseConfig';
import { withNavigation } from 'react-navigation';

export default class ListProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products : []
        }
    }

    static navigationOptions = {
        header: null
    }
    

    componentDidMount() {
        categoryName = this.props.navigation.getParam('categoryName');
        firebaseApp.database().ref('products').orderByChild('category').equalTo(categoryName).on('value', (snapshot) => {
            if(snapshot) {
                let data = snapshot.val();
                if (data) {
                    let items = Object.values(data);
                    this.setState({
                        products: items
                    });
                }
                
            }
        });
    }

    render() {
        const { container, header, wrapper, backStyle, titleStyle, productContainer, productInfo, productImage, txtName, txtPrice } = styles;
        const { products } = this.state;
        const { navigate } = this.props.navigation
        return (
            <View style={{flex: 1}}>
                <View style={container}>
                    <ScrollView style={wrapper}>
                        <View style={header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image source={back} style={backStyle} />
                            </TouchableOpacity>
                            <Text style={titleStyle}>{this.props.navigation.getParam('categoryName')}</Text>
                            <View style={{width: 30}}></View>
                        </View>
                        { products.map((product, idx) => {
                            return (
                                <View style={productContainer} key={idx}>
                                    <TouchableOpacity key={idx} onPress={() => navigate('ProductDetail', {productTitle : product.title})}>
                                        <Image source={{uri: product.imageUrl}} style={productImage} />
                                        <View style={productInfo}>
                                            <View style={{height: 30}}></View>
                                            <Text style={txtName}>{product.title}</Text>
                                            <Text style={txtPrice}>{product.price} VND / KG</Text>
                                            <View style={{height: 30}}></View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                            
                        })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productImageWidth = (width) / 1.4;
const productImageHeight = productImageWidth / 280 * 190;

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#DBDBD8'
    },

    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },

    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },

    backStyle: {
        width: 50,
        height: 50
    },

    titleStyle: {
        fontFamily: 'Avenir',
        fontSize: 20
    },

    productContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center',
        borderTopColor: '#fff',
        borderBottomColor: '#D2D2D2',
        borderRightColor: '#fff',
        borderLeftColor: '#fff',
        borderWidth: 1
    },

    productInfo: {
        justifyContent: 'space-between'
    },

    productImage: {
        width: productImageWidth,
        height: productImageHeight,
        marginRight: 10
    },

    txtName: {
        fontFamily: 'Avenir',
        color: '#313535',
        fontSize: 20,
        fontWeight: '400'
    },

    txtPrice: {
        fontFamily: 'Avenir',
        color: '#436E95',
        fontSize: 18
    }
});