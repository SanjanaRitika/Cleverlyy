import React, { useState } from "react";
import Header from "./../../../components/Header";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Button,
} from "react-native";

import { Link } from "expo-router";
import Sidebar from "./../../../components/SimpleSidebar";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <View style={styles.container}>
      <Header link="./../../settings/RootSettings" />

      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <ScrollView style={{ paddingLeft: 40, paddingRight: 30, paddingTop: 5 }}>
        <View style={styles.topSection}>
          <View style={styles.videoContainer}>
            <TouchableOpacity style={styles.playButton}>
              <Text>Play</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.activityLog}>
            <Text style={styles.activityLogTitle}>Activity Log</Text>
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>Watch video - Chapter 1</Text>
              <Text style={styles.activityDate}>1st November, 2023</Text>
            </View>
          </View>
        </View>

        <View style={styles.middleSection}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>EXAM DATES</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>PROGRESS</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>SUGGESTIONS</Text>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.actionBox}>
            <TouchableOpacity style={styles.actionButton}>
              <Text>Tips</Text>
            </TouchableOpacity>
            <Text style={styles.actionText}>Watch Videos</Text>
          </View>
          <View style={styles.actionBox}>
            <TouchableOpacity style={styles.actionButton}>
              <Text>Notes</Text>
            </TouchableOpacity>
            <Text style={styles.actionText}>Take Notes</Text>
          </View>
          <View style={styles.actionBox}>
            <TouchableOpacity style={styles.actionButton}>
              <Text>Papers</Text>
            </TouchableOpacity>
            <Text style={styles.actionText}>Solve Papers</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startJourneyButton}>
          <Text style={styles.startJourneyText}>Start your journey</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Join Community</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Submit Problems</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Missing something? Tell us</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  videoContainer: {
    width: "65%",
    height: 200,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  playButton: {
    width: 50,
    height: 50,
    backgroundColor: "#555",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  activityLog: {
    width: "30%",
    backgroundColor: "#252525",
    padding: 10,
    borderRadius: 10,
  },
  activityLogTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  activityItem: {
    marginBottom: 10,
  },
  activityText: {
    color: "#CCC",
  },
  activityDate: {
    color: "#777",
    fontSize: 12,
  },
  middleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoBox: {
    width: "30%",
    height: 100,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  infoText: {
    color: "#FFF",
    fontSize: 14,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionBox: {
    width: "30%",
    alignItems: "center",
  },
  actionButton: {
    width: 60,
    height: 60,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 10,
  },
  actionText: {
    color: "#FFF",
    fontSize: 14,
  },
  startJourneyButton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  startJourneyText: {
    color: "#FFF",
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
  },
  footerButton: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  footerButtonText: {
    color: "#FFF",
  },
  footerText: {
    color: "#777",
    textDecorationLine: "underline",
  },
});

export default HomeScreen;
