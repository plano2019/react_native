import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import { Icon } from 'react-native-elements';
import {items} from './CartMock';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }

  static navigationOptions = {
    title: 'Giỏ Hàng'
  }

  componentDidMount() {
    this.setState({dataSource: items});
  }

  render() {
    const {
      container,
      card,
      imageWrapper,
      productImage,
      infoWrapper,
      info,
      controller,
      infoText,
      quantityController,
      controllerText,
      productView,
      checkoutView,
      checkoutBtn,
      checkoutInfo
    } = styles;

    return (
      <View style={container}>
        <View style={productView}>
          <FlatList
            data = {this.state.dataSource}
            renderItem = {({item}) => (
              <View style={card}>
                  <View style={imageWrapper}>
                    <Image source={item.img} style={productImage}/>
                  </View>
                  <View style={infoWrapper}>
                    <View style={info}>
                      <Text style={infoText}>{item.name}</Text>
                      <Text style={infoText}>{item.price} / {item.unit}</Text>
                    </View>
                    <View style={controller}>
                      <View>
                        <TouchableOpacity>
                          <Icon name='trash' type='feather' color='#065B7D'/>
                        </TouchableOpacity>
                      </View>
                      <View style={quantityController}>
                        <TouchableOpacity>
                          <View>
                            <Icon name='plus-circle' type='feather' color='#065B7D'/>
                          </View>
                        </TouchableOpacity>
                        {/* // TODO: handle amount of item */}
                        <Text style={controllerText}>{item.quantity}</Text> 
                        <TouchableOpacity>
                          <Icon name='minus-circle' type='feather' color='#065B7D'/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
              </View>
            )}
            keyExtractor = {(item, index) => index.toString()}
          />
          
        </View>
        <View style={checkoutView}>
          <View style={checkoutInfo}>
            <Text style={{fontSize: 18, color: '#065B7D'}}>Tổng tiền ước tính: </Text>
            <Text style={{fontSize: 18, color: '#065B7D'}}>180,000 VNĐ</Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={checkoutBtn}>
              <Text style={{fontSize: 20, color: '#fff'}}>Đặt hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  card: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 5,
  },
  imageWrapper: {
    flex: 1,
    marginRight: 10
  },
  productImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  infoWrapper: {
    flex: 3,
    justifyContent: 'space-between'
  },
  info: {
    flex: 2
  },
  infoText: {
    fontWeight: 'bold'
  },
  controller: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  controllerText: {
    fontSize: 18,
    color: 'red'
  },
  quantityController: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: "space-between",
    paddingRight: 5
  },
  productView: {flex: 9},
  checkoutView: {
    flexDirection: 'column',
    flex: 1.5,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10
  },
  checkoutInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkoutBtn: {
    flex: 1,
    backgroundColor: '#065B7D',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Cart
