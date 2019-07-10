import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import SignIn from '../components/Account/Login/SignIn';
import SignUp from '../components/Account/Login/SignUp';
import Home from '../components/Home/Home';
import Main from '../components/Home/Main';
import Menu from '../components/Home/Menu';
import ProductList from '../components/Home/ListProduct';
import OrderConfirm from '../components/Order/OrderConfirm/OrderConfirm';
import Cart from '../components/Order/ShoppingCart/Cart';
import OrderHistory from '../components/Order/OrderHistory/OrderHistory';
const RootStack = createStackNavigator({
  SignIn,
  SignUp,
  Home,
  Main,
  Menu,
  OrderConfirm,
  OrderHistory,
  Cart,
  ProductList
}, {
  initialRouteName: 'Main',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#065B7D',
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 25
    }
  }
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;