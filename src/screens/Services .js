import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Carousel from '../components/Carousel'
import { dummyData } from '../Data/images'
import axios from 'axios';

export default class Services extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>

                <Text
                    style={{
                        fontSize: 30,
                        marginTop: 20,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                    }}
                >MekMobiAnalysis
                 <Icon name="home" color="#00000" style={{marginLeft:20}} size={24}
                      onPress={()=>navigate('Home')}
                 />
                </Text>
                
                <View style={{ padding: 10,marginTop:10 }}>
                {/* <Text
                    style={{
                        fontSize: 15,
                        marginTop: 20,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                    }}
                >Please enter the booking id:</Text> */}
               
                    <TextInput
                    
                        style={{fontSize:20, textAlign: "center",height: 40, borderColor: "#00000", borderWidth: 2, padding: 2 }}
                        placeholder="Enter booking id"

                    />
                    
                </View>
                {/* <View>
                <Carousel data = {dummyData}/>
                </View> */}
                <Card>
    <Card.Content>
      <Title style={{alignItems:"center"}}>Customer Name:Rachel</Title>
      <Paragraph>Phone:85632259   Service Type:Primary</Paragraph>
      <Paragraph></Paragraph>
      <Paragraph>Vehicle Model:Thunderbird 350cc</Paragraph>
      <Paragraph>Vehicle No:KA50 JA6339</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button style={{alignContent:"flex-end"}}>View More</Button>
    </Card.Actions>
  </Card>

            </View>
        )
    }
}