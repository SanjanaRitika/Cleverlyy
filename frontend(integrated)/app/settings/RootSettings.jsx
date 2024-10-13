import { View, Text, ScrollView, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import iconSet from "@expo/vector-icons/build/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const settingsSections = {
  Profile: [
    {
      label: "Re-setup your account",
      href: "settings/settingsPages/profile/root",
      iconSet: (
        <Ionicons name="arrow-redo-circle-outline" size={24} color="white" />
      ),
    },
  ],
  Privacy: [
    {
      label: "Privacy Controls",
      href: "settings/settingsPages/privacy/PrivacyControls",
      iconSet: <MaterialIcons name="privacy-tip" size={24} color="white" />,
    },
    {
      label: "FAQ",
      href: "settings/settingsPages/privacy/FAQ",
      iconSet: <FontAwesome name="question-circle-o" size={24} color="white" />,
    },
    {
      label: "Policies",
      href: "settings/settingsPages/privacy/Policies",
      iconSet: <MaterialIcons name="policy" size={24} color="white" />,
    },
    {
      label: "Clear History",
      href: "settings/settingsPages/privacy/ClearHistory",
      iconSet: <MaterialIcons name="clear-all" size={24} color="white" />,
    },
  ],
  Preferences: [
    {
      label: "Languages",
      href: "settings/settingsPages/preferences/Languages",
      iconSet: <Ionicons name="language" size={24} color="white" />,
    },
    {
      label: "Manage your content",
      href: "settings/settingsPages/preferences/ManageContent",
      iconSet: (
        <MaterialCommunityIcons
          name="content-save-cog-outline"
          size={24}
          color="white"
        />
      ),
    },
  ],
  Notification: [
    {
      label: "Push Notifications",
      href: "settings/settingsPages/notifications/PushNotifications",
      iconSet: (
        <MaterialIcons name="notifications-none" size={24} color="white" />
      ),
    },
    {
      label: "Streak Reminders",
      href: "settings/settingsPages/notifications/StreakReminders",
      iconSet: <AntDesign name="clockcircleo" size={24} color="white" />,
    },
    {
      label: "Achievement Updates",
      href: "settings/settingsPages/notifications/AchievementUpdate",
      iconSet: (
        <MaterialIcons name="tips-and-updates" size={24} color="white" />
      ),
    },
    {
      label: "Subscription Renew Reminder",
      href: "settings/settingsPages/notifications/Subscription",
      iconSet: <MaterialIcons name="subscriptions" size={24} color="white" />,
    },
  ],
};
BackgroundColor = "#0D1218";

const Section = ({ title, items }) => (
  <View>
    <View style={{ paddingTop: 24 }}>
      <Text
        style={{
          fontSize: 20,
          paddingBottom: 7,
          color: "#EDEADE",
          paddingLeft: 10,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </View>
    {items.map((item, index) => (
      <View
        key={index}
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#1C1F26",
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 8,
          marginBottom: 1,
        }}
      >
        <View>{item.iconSet}</View>

        <View>
          <Link href={item.href} asChild>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#EDEADE",
                  fontWeight: "400",
                  paddingLeft: 15,
                }}
              >
                {item.label}
              </Text>
            </Pressable>
          </Link>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <EvilIcons name="arrow-right" size={35} color="white" />
        </View>
      </View>
    ))}
  </View>
);

const RootSettings = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { height: winHeight, width: winWidth } = Dimensions.get("window");
  let leftPadding = winWidth > winHeight ? 50 : 0;
  let rightPadding = winWidth > winHeight ? 500 : 0;

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: BackgroundColor,
      }}
    >
      <SafeAreaProvider>
        <ScrollView
          contentContainerStyle={{
            paddingLeft: leftPadding,
            paddingRight: rightPadding,
          }}
        >
          <View
            style={{
              paddingHorizontal: 16,
              paddingTop: 24,
              flex: 1,
              flexDirection: "row",
              backgroundColor: "#1C1F26",
              borderRadius: 8,
            }}
          >
            <View>
              <MaterialIcons name="manage-accounts" size={60} color="white" />
            </View>
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#EDEADE",
                    fontWeight: "600",
                    paddingLeft: 5,
                  }}
                >
                  Account Settings
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 5,
                  borderRadius: 8,
                  marginBottom: 16,
                  marginTop: 4,
                }}
              >
                <Link
                  href={"settings/settingsPages/accountSettings/MyAccount"}
                  asChild
                >
                  <Pressable>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#EDEADE",
                        // fontWeight: "500",
                      }}
                    >
                      Your_Account_Name
                    </Text>
                  </Pressable>
                </Link>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: 15,
              }}
            >
              <EvilIcons name="arrow-right" size={35} color="white" />
            </View>
          </View>
          <Section title="Profile" items={settingsSections.Profile} />
          <Section title="Privacy" items={settingsSections.Privacy} />
          <Section title="Preferences" items={settingsSections.Preferences} />
          <Section title="Notification" items={settingsSections.Notification} />
        </ScrollView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default RootSettings;
