import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home';

const UserNavigation = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default UserNavigation;
