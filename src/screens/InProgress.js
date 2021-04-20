import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { Divider } from "react-native-elements";
import Icon from "@expo/vector-icons/AntDesign";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Carousel from "../components/Carousel";
import { dummyData } from "../Data/images";
import axios from "axios";
import { createNavigationContainer } from "react-navigation";

export default class Services extends React.Component {
    
  render() {
    const { navigate } = this.props.navigation
    //const { goBack } = this.props.navigation;
    return (
        
      <View style={{ backgroundColor: "#FFF", height: "100%" }}>
      
        {/* <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            fontFamily: "SemiBold",
            alignSelf: "center",
          }}
        >
          MekMobiAnalysis
          <Icon
            name="home"
            color="#00000"
            style={{ marginLeft: 20 }}
            size={24}
            onPress={() => navigate("Home")}
          />
        </Text> */}

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
