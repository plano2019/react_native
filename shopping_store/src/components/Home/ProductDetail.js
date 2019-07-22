import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView
} from 'react-native';
import { firebaseApp } from '../../services/FirebaseConfig';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import back from '../../assets/images/categories/arrowleft.png'

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : [],
            count: 1
        }
    }

    increaseCount(){
        this.setState({
            count: this.state.count + 1
        });
    }

    decreaseCount(){
        if(this.state.count == 1) {
            return;
        }
        else {
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        productTitle = this.props.navigation.getParam('productTitle');
        firebaseApp.database().ref('products').orderByChild('title').equalTo(productTitle).on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({
                products: items
            });
        });
    }
    render() {
        const {
            wrapper, cardStyle, header, txtValue,
            textStyle, backStyle, checkoutBtn, txtState, txtInfo,
            titleStyle, titleContainer, productDesc, txtCount
        } = styles;

        const { products } = this.state;
        const { navigate } = this.props.navigation;
        
        return (
            <View style={{flex: 1}}>
                {
                    products.map((product, idx) => {
                        return (
                            <View style={wrapper} key={idx}>
                                <View style={cardStyle}>
                                    <View style={header}>
                                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                            <Image source={back} style={backStyle} />
                                        </TouchableOpacity>
                                        <Text style={titleStyle}>{product.title}</Text>
                                        <View style={{width: 30}}></View>
                                    </View>
                                    <Image source={{uri: product.imageUrl}} style={{width:250, height: 250, marginLeft: 70}} />
                                    <View style={titleContainer}>
                                        <View style={{ flexDirection: 'row', paddingBottom: 5}}>
                                            <Text style={textStyle}>Giá:</Text>
                                            <Text style={txtValue}>{product.price} VND / KG</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 5}}>
                                            <Text style={textStyle}>Trạng Thái:</Text>
                                            <Text style={txtState}>Còn hàng</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 5}}>
                                            <Text style={textStyle}>Chọn số lượng:</Text>
                                            <View style={{width: 25}}></View>
                                            <TouchableOpacity onPress={() => {this.increaseCount()}}>
                                                <Icon name='ios-add-circle-outline' size={25} color={'#065B7D'}/>
                                            </TouchableOpacity>
                                            <Text style={txtCount}>{this.state.count}</Text>
                                            <TouchableOpacity onPress={() => {this.decreaseCount()}}>
                                                <Icon name='ios-remove-circle-outline' size={25} color={'#065B7D'}/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <ScrollView style={productDesc}>
                                        <Text style={textStyle}>Mô tả sản phẩm</Text>
                                        <Text style={txtInfo}>Khong phai ngau nhien ma mang cut duoc vi la "Nu hoang cua cac loai trai cay" (Queen of fruit). Ngay tu xa xua, nguoi ta da biet mang cut la mot loai trai cay quy. Ngoai huong vi thom ngon, bo duong cho suc khoe con nguoi, mang cut con la mot duoc lieu vo cung quy gia </Text>
                                    </ScrollView>
                                    <View style={{flexDirection: 'row', marginTop: 0}}>
                                        <TouchableOpacity style={checkoutBtn}>
                                            <Text style={{fontSize: 20, color: '#fff'}}>Thêm vào giỏ hàng</Text>
                                        </TouchableOpacity>
                                        <View style={{width:3}}></View>
                                        <TouchableOpacity style={checkoutBtn} onPress={() => navigate('CustomerInfoConfirm', {Product : product.title})}>
                                            <Text style={{fontSize: 20, color: '#fff'}}>Mua ngay</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}

export default withNavigation(ProductDetail);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        flex: 10,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5 
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 40,
        height: 40
    },
    
    titleStyle: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: 'blue'
    },

    productDesc: {
        padding: 10,
        borderTopColor: '#D8D8D8',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
    },

    titleContainer: {
        padding: 10,
        borderTopColor: '#D8D8D8',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
        justifyContent: 'space-between'
    },

    textStyle: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#000000',
        fontWeight: '500'
    },

    txtValue: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#E30F0B',
        marginLeft: 20
    },

    txtState: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#065B7D',
        marginLeft: 20
    },

    txtCount: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#065B7D',
        marginLeft: 10,
        marginRight: 10
    },

    txtInfo: {
        fontFamily: 'Avenir',
        fontSize: 18,
        textAlign: 'justify',
        lineHeight: 25,
    },

    checkoutBtn: {
        width: (width-23)/2,
        height: 35,
        backgroundColor: '#065B7D',
        justifyContent: 'center',
        alignItems: 'center'
    }
});