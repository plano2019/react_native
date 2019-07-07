import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image , FlatList} from 'react-native'
import {items} from '../ShoppingCart/CartMock';
import { ScrollView } from 'react-native-gesture-handler';


export default class OrderConfirm extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      text: '',
      dataSource: []
    }
  }

  componentDidMount() {
    this.setState({dataSource: items});
  }

  static navigationOptions = {
    title: 'Xác Nhận Đơn Hàng'
  };
  render() {
    const {
      infoView,
      productView,
      card,
      imageWrapper,
      productImage,
      infoWrapper,
      alignCenter,
      infoText,
      titleText,
      adddressView,
      checkoutView,
      messageView,
      paymentView,
      textAreaContainer,
      textArea,
      checkoutInfo,
      checkoutBtn
    } = styles;

    return (
      <View style={styles.container}>
        <View style={infoView}>
          <ScrollView>
            <View style={productView}>  
              <Text style={titleText}>Sản phẩm</Text>
              {this.state.dataSource.map((item, idx) => (
                <View style={card} key={idx}>
                    <View style={imageWrapper}>
                      <Image source={item.img} style={productImage}/>
                    </View>
                    <View style={infoWrapper}>
                      <View style={alignCenter}>
                        <Text style={infoText}>{item.name}</Text>
                        <Text style={infoText}>{item.price} / {item.unit}</Text>
                      </View>
                      <View style={alignCenter}>
                        <Text>{item.quantity}</Text>
                      </View>
                    </View>
                </View>
              ))}
            </View>
            <View style={paymentView}>
              <Text style={titleText}>Hình thức thanh toán</Text>
              <Text>Thanh toán khi nhận hàng</Text>
            </View>
            <View style={adddressView}>
              <Text style={titleText}>Địa chỉ nhận hàng</Text>
              <Text>Lê Văn An | 0918 999 055</Text>
              <Text>Số 10 Đặng Văn Ngũ - Q Phú Nhận - TP HCM</Text>
            </View>
            <View style={messageView}>
              <Text>Lời nhắn</Text>
              <View style={textAreaContainer} >
                <TextInput
                  style={textArea}
                  numberOfLines={4}
                  multiline={true}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={checkoutView}>
          <View style={{flex: 2}}>
            <View style={checkoutInfo}>
              <Text>Tổng tiền hàng</Text>
              <Text>180,000 VNĐ</Text>
            </View>
            <View style={checkoutInfo}>
              <Text>Chi phí vận chuyển</Text>
              <Text>20,000 VNĐ</Text>
            </View>
            <View style={checkoutInfo}>
              <Text>Tổng thanh toán</Text>
              <Text>200,000 VNĐ</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={checkoutBtn}>
              <Text style={{fontSize: 20, color: '#fff'}}>Tiến Hàng Đặt Hàng</Text>
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
  adddressView: {
    padding: 6,
    borderColor: '#eee',
    borderWidth: 2
  },
  messageView: {
    padding: 6,
    borderColor: '#eee',
    borderWidth: 2
  },
  paymentView: {
    padding: 6,
    borderColor: '#eee',
    borderWidth: 2
  },  
  checkoutView : {
    flex: 2,
    margin: 5,
    padding: 5,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  checkoutInfo: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  checkoutBtn: {
    flex: 1, 
    backgroundColor: '#065B7D', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  productView: {
    padding: 5,
    backgroundColor: '#fff'
  },
  infoView: {
    flex: 7, 
    backgroundColor: '#fff'
  },
  card: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  imageWrapper: {
    flex: 1,
    marginLeft: 10
  },
  productImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  infoWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  alignCenter: {
    justifyContent: 'center'
  },
  infoText: {
    fontWeight: 'bold'
  },
  titleText: {
    fontSize: 16,
    color: '#065B7D'
  },
  textAreaContainer: {
    borderColor: '#eee',
    borderWidth: 1
  },
  textArea: {
    textAlignVertical: 'top'
  }
});
