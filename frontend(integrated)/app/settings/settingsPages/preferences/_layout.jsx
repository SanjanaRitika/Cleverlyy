import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen name="settings/settingsPages/preferences/Languages"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/preferences/ManageContent"></Stack.Screen>
    </Stack>
  );
};

export default _layout;
