// import React from 'react'
// import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window')

// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       </View>
//     );
//   }
  
//   function NotificationsScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </View>
//     );
//   }
  
//   const Drawer = createDrawerNavigator();
  
//   export default function Draw() {
//     return (
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   }

// export default Draw