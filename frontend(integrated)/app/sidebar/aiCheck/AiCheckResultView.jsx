import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview"; // Import WebView to render PDFs
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Header from "./../../../components/Header";
import Sidebar from "./../../../components/SimpleSidebar";

const PaperReviewPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  // Replace the URLs with actual PDF URLs
  const solvedPaperUrl = "https://commons.wikimedia.org/wiki/Main_Page";
  const aiResponseUrl = "https://commons.wikimedia.org/wiki/Category:Fossils";

  return (
    <View style={styles.container}>
      <Header link="./../../settings/RootSettings" />

      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerText}>AI Checking</Text>
          </View>
          <View style={styles.HorizontalLineView}></View>
        </View>
        <ScrollView>
          {/* Action Buttons */}
          <View style={styles.mainHeaderContainer}>
            <View style={styles.HeaderContainerLeftWrapper}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.paperTitle}>
                  Cambridge Chemistry O-Level - 2015 May/June Variant 1 Paper 1
                </Text>
              </View>
              <View style={styles.actionButtonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Save to Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>See Grade Boundary</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.HeaderContainerRightWrapper}>
              <TouchableOpacity
                style={[styles.button, styles.buttonVerticalPlacement]}
              >
                <Text style={styles.buttonText}>Solve Paper 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonVerticalPlacement]}
              >
                <Text style={styles.buttonText}>Study Related Topics</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Main content with Solved Paper and AI Response */}
          <View style={styles.contentContainer}>
            {/* Solved Paper Section */}
            <View style={[styles.column, { marginRight: 10 }]}>
              <View style={styles.columnHeaderContainer}>
                <Text style={styles.columnHeader}>Your Solved paper</Text>
                <TouchableOpacity>
                  <Text
                    style={[styles.columnHeader, styles.columnHeaderButtonText]}
                  >
                    markscheme
                  </Text>
                </TouchableOpacity>
              </View>
              <WebView
                source={{ uri: solvedPaperUrl }} // WebView to load PDF URL for solved paper
                style={styles.pdfViewer}
              />
            </View>

            {/* AI Response Section */}
            <View style={styles.column}>
              <View style={styles.aiResponseHeader}>
                <View>
                  <Text style={styles.columnHeader}>AI Response</Text>
                </View>
                <View style={styles.aiResponseHeaderMarksContainer}>
                  <View style={styles.downloadButtonContainer}>
                    <TouchableOpacity>
                      <Feather name="download" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.aiGivenMarks}>
                    <View style={styles.marksTextWrapper}>
                      <Text>Marks</Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <AntDesign name="edit" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <WebView
                source={{ uri: aiResponseUrl }} // WebView to load PDF URL for AI response
                style={styles.pdfViewer}
              />
            </View>
          </View>

          <View style={styles.bottomMessageContainer}>
            <View></View>
            <View style={styles.CautionTextContainer}>
              <AntDesign name="infocirlceo" size={20} color="black" />
              <View style={styles.CautionTextWrapper}>
                <Text>Ai Checking may not be accurate</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.giveFeedBackButton}>
                <Text style={styles.giveFeedBackText}>Give Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingLeft: 90,
    paddingRight: 20,
    paddingBottom: 150,
  },
  subContainer: {
    paddingLeft: 20,
  },
  mainHeaderContainer: {
    flexDirection: "row",
  },
  HeaderContainerLeftWrapper: { flex: 6, flexDirection: "column" },
  HeaderContainerRightWrapper: { flex: 2 },
  headerContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  headerTextContainer: { marginTop: 10, marginBottom: 10 },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  HorizontalLineView: {
    marginTop: 12,
    borderBottomWidth: 1,
  },
  paperTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#8c7bff",
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonVerticalPlacement: {
    marginTop: 10,
    paddingLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 10,
  },
  column: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: "#8c7bff",
  },
  columnHeaderContainer: {
    marginLeft: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnHeader: {
    marginBottom: 20,
    fontSize: 20,
  },
  columnHeaderButtonText: { color: "#8c7bff" },
  pdfViewer: {
    flex: 1,
    height: 600, // Adjust the height based on your design requirements
    backgroundColor: "#f0f0f0",
  },
  aiResponseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  aiResponseHeaderMarksContainer: {
    flexDirection: "row",
  },

  aiGivenMarks: {
    flexDirection: "row",
    backgroundColor: "#c1baf4",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
  },
  downloadButtonContainer: {
    marginRight: 10,
  },

  marksTextWrapper: {
    marginTop: 2,
    marginRight: 10,
  },
  bottomMessageContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CautionTextContainer: {
    flexDirection: "row",
  },
  CautionTextWrapper: {
    paddingTop: 3,
    paddingLeft: 3,
  },
  giveFeedBackButton: {},
  giveFeedBackText: {
    color: "#8c7bff",
    fontSize: 18,
    fontWeight: "800",
  },
});

export default PaperReviewPage;
