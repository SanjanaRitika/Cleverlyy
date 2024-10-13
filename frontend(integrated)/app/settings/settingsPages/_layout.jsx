import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="settings/settingsPages/rSp"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/accountSettings"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/notifications"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/preferences"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/privacy"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/profile"></Stack.Screen>
    </Stack>
  );
};

export default _layout;
