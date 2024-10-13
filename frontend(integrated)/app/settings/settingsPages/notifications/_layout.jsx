import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="settings/settingsPages/notifications/AchievementUpdate"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/notifications/PushNotifications"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/notifications/StreakReminder.jsx"></Stack.Screen>
      <Stack.Screen name="settings/settingsPages/notifications/Subscription.jsx"></Stack.Screen>
    </Stack>
  );
};

export default _layout;
