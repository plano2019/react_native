import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { firebaseApp } from '../../services/FirebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class ProductPopular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        firebaseApp.database().ref('products').limitToFirst(20).on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({
                products: items
            });
        });
    }

    render() {
        const { 
            container, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice
        } = styles;

        const {products} = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>Product Popular</Text>
                </View>
                <View style={body}>
                    {
                        products.map((product, idx) => {
                               return (
                                <TouchableOpacity key={idx} onPress={() => navigate('ProductDetail', {productTitle : product.title})}>
                                    <Image source={{uri: product.imageUrl}} style={productImage} />
                                    <Text style={productName}>{product.title}</Text>
                                    <Text style={productPrice}>{product.price} VND/KG</Text>
                                </TouchableOpacity>
                               )
                               
                           })
                    }
                    {/* <View style={productContainer}>
                        <Image source={bo} style={productImage} />
                        <Text style={productName}>Bo Sap</Text>
                        <Text style={productPrice}>60.000 VND/KG</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={cam} style={productImage} />
                        <Text style={productName}>Cam Sanh</Text>
                        <Text style={productPrice}>80.000 VND/KG</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={mangcut} style={productImage} />
                        <Text style={productName}>Mang Cut Cai Mon</Text>
                        <Text style={productPrice}>160.000 VND/KG</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={oi} style={productImage} />
                        <Text style={productName}>Oi Nu Hoang</Text>
                        <Text style={productPrice}>50.000 VND/KG</Text>
                    </View> */}
                </View>
            </View>
        );
    }
}

export default withNavigation(ProductPopular);

const { width } = Dimensions.get('window');
const productImageWidth = (width - 150) / 2;
const productImageHeight = productImageWidth / 280 * 190;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 5,
        shadowColor: '#121212',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.2
    },

    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },

    title: {
        color: 'black',
        fontSize: 20
    },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },

    productContainer: {
        width: productImageWidth,
        paddingBottom: 5,
        shadowColor: '#121212',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.2
    },

    productImage: {
        width: productImageWidth,
        height: productImageHeight
    },
    
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#00050A',
        fontWeight: '500'
    },

    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#00050A',
        fontWeight: '500'
    }
});