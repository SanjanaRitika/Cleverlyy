import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        href="/login/SelectCountry"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Register Now
      </Link>
    </View>
  );
};

export default Index;
