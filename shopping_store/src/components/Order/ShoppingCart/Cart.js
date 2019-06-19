import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import mockData from '../mockData/mockHistoryOrder';

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
    this.setState({dataSource: mockData.items});
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
      deleteController,
      quantityController,
      controllerText
    } = styles;

    return (
      <View style={container}>
        <View style={{flex: 9}}>
          <FlatList
            data = {this.state.dataSource}
            renderItem = {({item}) => (
              <View style={card}>
                  <View style={imageWrapper}>
                    <Image source={{uri: item.img}} style={productImage}/>
                  </View>
                  <View style={infoWrapper}>
                    <View style={info}>
                      <Text>{item.name}</Text>
                      <Text>{item.price} / {item.unit}</Text>
                    </View>
                    <View style={controller}>
                      <View style={deleteController}>
                        <TouchableOpacity>
                          <Text style={controllerText}>[ X ]</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={quantityController}>
                        <TouchableOpacity>
                          <Text style={controllerText}>[ - ]</Text>
                        </TouchableOpacity>
                        {/* // TODO: handle amount of item */}
                        <Text style={controllerText}>1</Text> 
                        <TouchableOpacity>
                          <Text style={controllerText}>[ + ]</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
              </View>
            )}
            keyExtractor = {(item, index) => index.toString()}
          />
          
        </View>
        <View style={{flexDirection: 'column', flex: 1.5, backgroundColor: '#fff', margin: 5, padding: 10}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 18, color: '#065B7D'}}>Tổng tiền ước tính: </Text>
            <Text style={{fontSize: 18, color: '#065B7D'}}>180,000 VNĐ</Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={{flex: 1, backgroundColor: '#065B7D', justifyContent: 'center', alignItems: 'center'}}>
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
    width: '40%',
    justifyContent: "space-between",
    paddingRight: 5
  },
  deleteController: {width: '20%'}
});

export default Cart
