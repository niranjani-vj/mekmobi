import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register'
import Home from '../screens/Home'
import Services  from '../screens/Services '

const stackNavigatorOptions = {
    headerShown:false,
    DrawerLayout:true
    
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Home:{screen:Home},
    Services:{screen:Services},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);