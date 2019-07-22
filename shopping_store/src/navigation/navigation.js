import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Main from '../components/Home/Main';
import Cart from '../components/Order/ShoppingCart/Cart';
import Menu from '../components/Home/Menu';
import ListProduct from '../components/Home/ListProduct';
import OrderHistory from '../components/Order/OrderHistory/OrderHistory';
import UpdateInfo from '../components/Account/ChangeUserInformation/UpdateInfo';
import ChangePassword from '../components/Account/ChangePassword/ChangePassword';
import OrderConfirm from '../components/Order/OrderConfirm/OrderConfirm';
import ProductDetail from '../components/Home/ProductDetail';
import SignIn from '../components/Account/Login/SignIn';
import CustomerInfoConfirm from '../components/Account/ChangeUserInformation/CustomerInfoConfirm';

const MainStack = createStackNavigator({
  ProductHome: Main,
  ProductList: ListProduct,
  ProductDetail: ProductDetail,
  CustomerInfoConfirm: CustomerInfoConfirm,
  OrderConfirm: OrderConfirm,
  SignIn: SignIn,
  OrderHistory,
  UpdateInfo,
  ChangePassword,
})

const CartStack = createStackNavigator({
  Cart,
  OrderConfirm
})

const BottomTab = createBottomTabNavigator({
  Home: {
    screen: MainStack,
    navigationOptions: ({tintColor}) => ({
      tabBarIcon: <Icon name='ios-home' size={25} color={'#255A72'}/>,

    })
  },
  Cart: {
    screen: CartStack,
    navigationOptions: ({tintColor}) => ({
      tabBarIcon: <Icon name='ios-cart' size={25} color={'#255A72'}/>
    })
  }
})

const RootStack = createStackNavigator({
  MainTab: BottomTab,
}, {
  defaultNavigationOptions: {
    header: null
  }
});

const drawer = createDrawerNavigator({
  RootStack
},{
  contentComponent: SignIn
})

const AppContainer = createAppContainer(drawer);

export default AppContainer;