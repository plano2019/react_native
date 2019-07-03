import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import SignIn from '../components/Account/Login/SignIn';
import SignUp from '../components/Account/Login/SignUp';
import Home from '../components/Home/Home';
import Main from '../components/Home/Main';
import Menu from '../components/Home/Menu';
// import OrderHistory from '../components/Order/OrderHistory/OrderHistory';
import ProductPopular from '../components/Home/ProductPopular';

const RootStack = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
  Home: Home,
  Main: Main,
  Menu: Menu,
  ProductPopular: ProductPopular,
  // OrderHistory: OrderHistory,
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