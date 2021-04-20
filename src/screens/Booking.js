import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { Divider } from "react-native-elements";
import Icon from "@expo/vector-icons/AntDesign";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Carousel from "../components/Carousel";
import { dummyData } from "../Data/images";
import axios from "axios";

export default class Booking extends React.Component {
    
  render() {
    
  
    return (
        
      <View style={{ backgroundColor: "#FFF", height: "100%" }}>
      
       

        <View style={{ padding: 10, marginTop: 10 }}>
          
        </View>
        {/* <View>
                <Carousel data = {dummyData}/>
                </View> */}
        <Card style={{ backgroundColor: "#C0C0C0" }}>
          <View>
            <Divider />
            <Title>
             
                {/* <Avatar.Image
                  size={50}
                  source="https://www.thewrap.com/wp-content/uploads/2014/12/Andy-Samberg-brooklyn.jpg"
                /> */}
              
              <Text
                style={{
                  alignContent: "top",
                  paddingLeft: 10,
                  marginBottom: 70,
                  fontSize:25
                }}
              >
                Andy Samberg
              </Text><br/>
              <Text style={{color:"blue",fontSize:15,paddingLeft:10}}>85632259</Text>
            </Title>
            <Divider />
          </View>
          <Card.Content>
            <View style={{ backgroundColor: "#C0C0C0" }}>
              <Paragraph> Service Type:Primary</Paragraph>

              <Paragraph> Vehicle Model:Thunderbird 350cc</Paragraph>
              <Paragraph> Vehicle No:KA50 JA6339</Paragraph>
            </View>
          </Card.Content>
          <Divider/>
          {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
          <Card.Actions>
            <Button style={{ alignSelf:"center"}}>View More</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  }
}
