import { View, Text } from "react-native";
import React from "react";

const rootForum = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Goes to Discourse API</Text>
    </View>
  );
};

export default rootForum;
