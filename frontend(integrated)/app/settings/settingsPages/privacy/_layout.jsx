import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="settings/settingsPages/privacy/Ads"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/privacy/ClearHistory"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/privacy/FAQ"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/privacy/Policies"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/privacy/PrivacyControls"></Stack.Screen>
    </Stack>
  );
};

export default _layout;
