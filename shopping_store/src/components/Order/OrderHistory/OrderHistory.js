import React, { Component } from 'react';
import { StyleSheet , Text, View, Dimensions , ScrollView} from 'react-native';
import {arrOrder} from './../OrderHistory/OrderHistoryMock';


export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { arrOrder: [] }
  }

  componentDidMount() {
    this.setState({arrOrder: arrOrder})
  }

  static navigationOptions = {
    title: 'Lịch Sử Đơn Hàng'
  };

  render() {
    const { container, orderCard, orderRow,  leftCol, rightCol } = styles;
    return (
      <View style={container}>
        <ScrollView>
          { this.state.arrOrder.map((order, idx) => (
            <View style={orderCard} key={order.id + idx}>
              <View style={orderRow}>
                <Text style={leftCol}>Mã đơn hàng</Text>
                <Text style={rightCol}>{order.id}</Text>
              </View>
              <View style={orderRow}>
                <Text style={leftCol}>Ngày đặt</Text>
                <Text style={rightCol}>{order.date}</Text>
              </View>
              <View style={orderRow}>
                <Text style={leftCol}>Tổng số tiền</Text>
                <Text style={rightCol}>{order.total}</Text>
              </View>
              <View style={orderRow}>
                <Text style={leftCol}>Trạng thái đơn hàng</Text>
                <Text style={rightCol}>{order.status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 10, 
    backgroundColor: '#eee'
  },
  orderCard: {
    height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around',
    borderRadius: 5
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftCol: {
    color: '#000',
    fontSize: 16
  },
  rightCol: {
    width: '40%',
    color: '#000',
    fontSize: 16
  }
});
