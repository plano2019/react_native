import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Login from '../components/Account/Login/Login';

const RootStack = createStackNavigator({
  Login: Login,
}, {
  initialRouteName: 'Login',
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