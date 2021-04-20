import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register'
import Home from '../screens/Home'
import Services  from '../screens/Services '
import In_Progress  from '../screens/InProgress'
import Completed  from '../screens/Completed'
import Booking  from '../screens/Booking'
import CustomDrawerNavigator from './CustomDrawerNavigator'
import Icon from "@expo/vector-icons/AntDesign";
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';



const Drawer = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        // drawerIcon: ({ tintColor }) => (
        //   <Ionicons name="md-home" style={{ color: tintColor }} />
        // ),
        drawerLabel: "Home"
      },
      screen: Home
    },

    Booking: {
      navigationOptions: {
        // drawerIcon: ({ tintColor }) => (
        //   <Ionicons name="md-settings" style={{ color: tintColor }} />
        // ),
        drawerLabel: "Booking"
      },
      screen: Booking
    },

    Services: {
      navigationOptions: {
        // drawerIcon: ({ tintColor }) => (
        //   <Ionicons name="ios-person" style={{ color: tintColor }} />
        // ),
        drawerLabel: "Services"
      },
      screen: Services
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);


const Tabs = createMaterialTopTabNavigator(
    {
            
      Services: {
        screen: Services,
        navigationOptions: {
          tabBarLabel: ({tintColor}) => (
            <View style={styles.iconCOntainer}>
              {/* <Icon name="ios-home" color={tintColor} size={22} /> */}
              <Text style={{color: tintColor}}>Active Bookings</Text>
            </View>
          ),
        },
      },
      In_Progress: {
        screen: In_Progress,
        navigationOptions: {
          tabBarLabel: ({tintColor}) => (
            <View style={styles.iconCOntainer}>
              {/* <Icon name="ios-person" color={tintColor} size={22} /> */}
              <Text style={{color: tintColor}}>In Progress</Text>
            </View>
          ),
        },
      },
      Completed: {
        screen: Completed,
        navigationOptions: {
          tabBarLabel: ({tintColor}) => (
            <View style={styles.iconCOntainer}>
              {/* <Icon name="ios-person" color={tintColor} size={22} /> */}
              <Text style={{color: tintColor}}>Completed</Text>
            </View>
          ),
        },
      },
     
    },
    {
      initialRouteName: 'Services',
      lazyLoad: true,
      tabBarPosition: 'top',
      swipeEnabled: true,
      tabBarOptions: {
        style: {
          height: 70,
          backgroundColor: '#40404c',
          paddingBottom: 3,
          paddingTop: 3,
        },
        indicatorStyle: {
          backgroundColor: '#fff',
          elevation: 10,
        },
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
      },
    },
  );
  const styles = StyleSheet.create({
    iconCOntainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
  });

const stackNavigatorOptions = {
    headerShown:false,
    DrawerLayout:true,
    swipeEnabled: true,
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Drawer:{screen:Drawer},
    Home:{screen:Home},
   Booking:{screen:Booking},
    
    Tabs: {
        screen: Tabs,
        navigationOptions: {
          title: 'MekMobiAnalysis',
          headerStyle: {
            backgroundColor: '#2b2b39',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerShown:true
        },
      },
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);