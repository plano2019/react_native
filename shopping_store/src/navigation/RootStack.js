import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import SignIn from '../components/Account/Login/SignIn';
import SignUp from '../components/Account/Login/SignUp';

const RootStack = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
}, {
  initialRouteName: 'SignIn',
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