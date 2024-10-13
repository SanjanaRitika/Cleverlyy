import React, { useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const ContentManagement = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [autoplayMedia, setAutoplayMedia] = useState(false);
  const [reducedAnimation, setReducedAnimation] = useState(false);
  const [openLinksInBuiltBrowser, setOpenLinksInBuiltBrowser] = useState(true);
  const [contentDisplayStyle, setContentDisplayStyle] = useState("banner");

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const recommendations = await AsyncStorage.getItem(
          "showRecommendations"
        );
        const autoplay = await AsyncStorage.getItem("autoplayMedia");
        const animation = await AsyncStorage.getItem("reducedAnimation");
        const openLinks = await AsyncStorage.getItem("openLinksInBuiltBrowser");
        const displayStyle = await AsyncStorage.getItem("contentDisplayStyle");

        if (recommendations !== null)
          setShowRecommendations(JSON.parse(recommendations));
        if (autoplay !== null) setAutoplayMedia(JSON.parse(autoplay));
        if (animation !== null) setReducedAnimation(JSON.parse(animation));
        if (openLinks !== null)
          setOpenLinksInBuiltBrowser(JSON.parse(openLinks));
        if (displayStyle !== null) setContentDisplayStyle(displayStyle);
      } catch (e) {
        console.error("Failed to load settings", e);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem(
          "showRecommendations",
          JSON.stringify(showRecommendations)
        );
        await AsyncStorage.setItem(
          "autoplayMedia",
          JSON.stringify(autoplayMedia)
        );
        await AsyncStorage.setItem(
          "reducedAnimation",
          JSON.stringify(reducedAnimation)
        );
        await AsyncStorage.setItem(
          "openLinksInBuiltBrowser",
          JSON.stringify(openLinksInBuiltBrowser)
        );
        await AsyncStorage.setItem("contentDisplayStyle", contentDisplayStyle);
      } catch (e) {
        console.error("Failed to save settings", e);
      }
    };

    saveSettings();
  }, [
    showRecommendations,
    autoplayMedia,
    reducedAnimation,
    openLinksInBuiltBrowser,
    contentDisplayStyle,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <MaterialIcons name="recommend" size={24} color="white" />
        <Text style={styles.settingText}>Show Recommendations</Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <Switch
            value={showRecommendations}
            onValueChange={setShowRecommendations}
          />
        </View>
      </View>

      <View style={styles.settingContainer}>
        <AntDesign name="playcircleo" size={24} color="white" />
        <Text style={styles.settingText}>Autoplay Media</Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <Switch value={autoplayMedia} onValueChange={setAutoplayMedia} />
        </View>
      </View>

      <View style={styles.settingContainer}>
        <MaterialIcons name="animation" size={24} color="white" />
        <Text style={styles.settingText}>Reduced Animation</Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <Switch
            value={reducedAnimation}
            onValueChange={setReducedAnimation}
          />
        </View>
      </View>

      <View style={styles.groupContainer}>
        <View style={styles.settingHeader}>
          <AntDesign name="link" size={24} color="white" />
          <Text style={styles.settingText}>Open Links in</Text>
        </View>
        <View style={styles.optionButtons}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              openLinksInBuiltBrowser ? styles.optionButtonSelected : null,
            ]}
            onPress={() => setOpenLinksInBuiltBrowser(true)}
          >
            <Text style={styles.optionButtonText}>In-built Browser</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              !openLinksInBuiltBrowser ? styles.optionButtonSelected : null,
            ]}
            onPress={() => setOpenLinksInBuiltBrowser(false)}
          >
            <Text style={styles.optionButtonText}>External Browser</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.groupContainer}>
        <View style={styles.settingHeader}>
          <MaterialIcons name="settings-display" size={24} color="white" />
          <Text style={styles.settingText}>Content Display Style</Text>
        </View>
        <View style={styles.optionButtons}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              contentDisplayStyle === "banner"
                ? styles.optionButtonSelected
                : null,
            ]}
            onPress={() => setContentDisplayStyle("banner")}
          >
            <Text style={styles.optionButtonText}>Banner</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              contentDisplayStyle === "list"
                ? styles.optionButtonSelected
                : null,
            ]}
            onPress={() => setContentDisplayStyle("list")}
          >
            <Text style={styles.optionButtonText}>List</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0D1218",
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    padding: 15,
    backgroundColor: "#1E2630",
    borderRadius: 10,
  },
  settingText: {
    paddingLeft: 10,
    fontSize: 18,
    color: "#FFFFFF",
  },
  groupContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 15,
    padding: 15,
    backgroundColor: "#1E2630",
    borderRadius: 10,
  },
  settingHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  optionButtons: {
    flexDirection: "row",
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#1E2630",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  optionButtonSelected: {
    backgroundColor: "#3A4452",
  },
  optionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ContentManagement;
