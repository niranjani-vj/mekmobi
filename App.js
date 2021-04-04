import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from 'react-navigation-stack';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {login} from './src/screens/Login'
import {Home} from './src/screens/Home'

// const AppNavigator = createStackNavigator({
//   // Login:{screen:Login},
//   // Register:{screen:Register},
//   Home:{screen:Home},
// })
// const Drawer = createDrawerNavigator( );

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    return (
      // <NavigationContainer>
      // <Drawer.Navigator>
      //   <Drawer.Screen name="Home" component={Home}/>
      // </Drawer.Navigator>
      // </NavigationContainer>
     (this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
          
          // <Route path="/login" component={login}>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
