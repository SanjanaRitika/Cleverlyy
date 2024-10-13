import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";

import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const Header = (settingsLink) => {
  console.log(settingsLink);
  const { height: winHeight, width: winWidth } = Dimensions.get("window");
  if (winWidth > winHeight) {
    sidebarHeight = 80;
    toppadding = 5;
  } else {
    sidebarHeight = 120;
    toppadding = 50;
  }
  return (
    <SafeAreaView
      style={{
        width: winWidth,
        height: sidebarHeight,
        backgroundColor: "#271f4d",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 70,
          paddingTop: toppadding,
        }}
      >
        <TouchableOpacity>
          <Link
            href={settingsLink.link}
            style={{ flex: 1, flexDirection: "row", marginTop: 5 }}
          >
            <View>
              <Text>
                <AntDesign name="user" size={60} color="white" />
              </Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 30, color: "white" }}>Username</Text>
              <Text style={{ fontSize: 25, color: "white" }}>Tutor</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
