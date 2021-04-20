
import React from "react";
import { View,Image } from "react-native";
import { DrawerItems } from "react-navigation-drawer";

// import styles from "./styles";

const CustomDrawerNavigator = props => (
  <View style={{ flex: 1}}>
 <Image
          source={require("../images/mekhavan.png")}
          style={{
            width: "70%",
            height: "30%",
            alignSelf: "center",
            marginTop: 20,
          }}
        />
    <DrawerItems
      activeBackgroundColor={"black"}
      activeTintColor={"white"}
      iconContainerStyle={{width: 30}}
      {...props}
    />
  </View>
);

export default CustomDrawerNavigator;