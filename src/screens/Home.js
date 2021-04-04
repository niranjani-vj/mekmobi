import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from '@expo/vector-icons/AntDesign';
import Carousel from '../components/Carousel'
import { dummyData } from '../Data/images'
import { StackNavigator, DrawerNavigator } from 'react-navigation';




export default class Home extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        
        return (

            <View>
                {/* <Icon name="bars" color="#00000" style={{
                    marginLeft:20,
                     marginTop:5,
                     fontFamily:"SemiBold",
                 }} size={24}/> */}
                <Text
                    style={{
                        fontSize: 30,
                        marginTop: 5,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                    }}
                >
                    <Icon name="bars" color="#00000" style={{
                        marginRight: 25,
                        marginTop: 5,
                        fontFamily: "SemiBold",
                    }} size={24} />
                MekMobiAnalysis</Text>
                {/* <Carousel data = {dummyData}/> */}
                <Card >
                    <Card.Title style={{ fontSize: 20 }}>Services</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        onPress={() => navigate('Services')} source='https://previews.123rf.com/images/artinspiring/artinspiring1911/artinspiring191100279/133612032-vector-illustration-of-automobile-got-fixed-in-car-service-mechanic-in-uniform-check-a-vehicle-and-r.jpg'>

                        {/* <Button
                            buttonStyle={{ width:20 ,borderRadius: 0, marginTop: 120, marginRight: 0, marginBottom: 0, position: "relative" }}
                            title='VIEW NOW' /> */}
                    </Card.Image>
                </Card>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <br></br>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <Card >
                    <Card.Title style={{ fontSize: 20 }}>Repair</Card.Title>
                    <Card.Divider />
                    <Card.Image source='https://image.freepik.com/free-vector/car-repair-illustration-wheel-replacement-offer-car-service_81522-2947.jpg'>

                        {/* <Button
                            buttonStyle={{ width:20 ,borderRadius: 0, marginTop: 120, marginRight: 0, marginBottom: 0, position: "relative" }}
                            title='VIEW NOW' /> */}
                    </Card.Image>

                </Card>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <br></br>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <Card >
                    <Card.Title style={{ fontSize: 20 }}>Customer Profile</Card.Title>
                    <Card.Divider />
                    <Card.Image source='https://img.freepik.com/free-vector/hotline-operator-advises-client_7737-1766.jpg?size=626&ext=jpg'>

                        {/* <Button
                            buttonStyle={{ width:20 ,borderRadius: 0, marginTop: 120, marginRight: 0, marginBottom: 0, position: "relative" }}
                            title='VIEW NOW' /> */}
                    </Card.Image>
                </Card>
                {/* <TouchableOpacity onPress={() => alert('FAB clicked')} style={{
                    position: 'absolute',
                    width: 56,
                    height: 56,
                    alignItems: 'center',
                    justifyContent: 'center',
                    right: 20,
                    bottom: 20,
                    backgroundColor: '#03A9F4',
                    borderRadius: 30,
                    elevation: 8
                }}>
                    <Text style={{ fontSize: 40, color: 'white' }}>...</Text>
                </TouchableOpacity> */}
                <FAB
    style={{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }}
    larger
    icon="chat"
    onPress={() => console.log('Pressed')}
  />
            </View>

        )
    }
}