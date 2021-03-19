import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'
import Icon from '@expo/vector-icons/AntDesign';
import Carousel from '../components/Carousel'
import { dummyData } from '../Data/images'

export default class Home extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
            <Text
                 style={{
                     fontSize:30,
                     marginTop:20,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >MekMobiAnalysis</Text>
                {/* <Carousel data = {dummyData}/> */}
                <Card >
                    <Card.Title style={{fontSize:20}}>Services</Card.Title>
                    <Card.Divider />
                    <Card.Image source='https://previews.123rf.com/images/artinspiring/artinspiring1911/artinspiring191100279/133612032-vector-illustration-of-automobile-got-fixed-in-car-service-mechanic-in-uniform-check-a-vehicle-and-r.jpg'>

                        {/* <Button
                            buttonStyle={{ width:20 ,borderRadius: 0, marginTop: 120, marginRight: 0, marginBottom: 0, position: "relative" }}
                            title='VIEW NOW' /> */}
                    </Card.Image>
                </Card>
                <Card >
                    <Card.Title style={{fontSize:20}}>Repair</Card.Title>
                    <Card.Divider />
                    <Card.Image source='https://image.freepik.com/free-vector/car-repair-illustration-wheel-replacement-offer-car-service_81522-2947.jpg'>

                        {/* <Button
                            buttonStyle={{ width:20 ,borderRadius: 0, marginTop: 120, marginRight: 0, marginBottom: 0, position: "relative" }}
                            title='VIEW NOW' /> */}
                    </Card.Image>
                    
                </Card>
                <Card >
                    <Card.Title style={{fontSize:20}}>Customer Profile</Card.Title>
                    <Card.Divider />
                    <Card.Image source='https://img.freepik.com/free-vector/hotline-operator-advises-client_7737-1766.jpg?size=626&ext=jpg'>

                        {/* <Button
                            buttonStyle={{ width:20 ,borderRadius: 0, marginTop: 120, marginRight: 0, marginBottom: 0, position: "relative" }}
                            title='VIEW NOW' /> */}
                    </Card.Image>
                </Card>
            </View>

        )
    }
}