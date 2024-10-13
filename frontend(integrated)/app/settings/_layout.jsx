import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="settings/RootSettings"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages"></Stack.Screen>
    </Stack>
  );
};

export default _layout;
