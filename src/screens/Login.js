import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      password: null,
    };
    //this.checkLogin = this.checkLogin.bind(this);
  }
  checkLogin = (e) => {
    e.preventDefault();
    console.log("check!")
    const user={
        phone:this.state.phone,
        password:this.state.password
    }
    console.log(user.phone)
  
    axios.get('http://localhost:5000/login', user)
    .then(res => {
        console.log(res.data)
        if (res.data != null) {
            this.props.navigation.navigate('Home');
        }
        else {
            alert("Wrong Login Id.. ");
            this.props.navigation.navigate('Login');
        }
    })
     let path = `/home`
     this.props.navigation.navigate('Home');
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: "#FFF", height: "100%" }}>
        <Image
          source={require("../images/mekhavan.png")}
          style={{
            width: "80%",
            height: "35%",
            alignSelf: "center",
            marginTop: 30,
          }}
        />
        <br />
        <br />
        <Text
          style={{
            fontSize: 30,
            fontFamily: "SemiBold",
            alignSelf: "center",
          }}
        >
          MekMobiAnalysis
        </Text>

        <Text
          style={{
            fontFamily: "SemiBold",
            marginHorizontal: 55,
            textAlign: "center",
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          Welcome to Mekvahan
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 20,
            paddingVertical: 2,
          }}
        >
          <Icon name="mobile1" color="#00716F" size={24} />
          <TextInput
            onChangeText={(phone) => this.setState({ phone })}
            placeholder="Phone number"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 20,
            paddingVertical: 2,
          }}
        >
          <Icon name="lock" color="#00716F" size={24} />
          <TextInput
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            placeholder="Password"
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View
          onClick={this.checkLogin}
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00716F",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Login!
          </Text>
        </View>
        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#00716F",
            fontFamily: "SemiBold",
            paddingVertical: 30,
          }}
        >
          New User
        </Text>
      </View>
    );
  }
}
