import React, { useState, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Header from "./../../../components/Header";
import Sidebar from "./../../../components/SimpleSidebar";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import DraggableFlatList from "react-native-draggable-flatlist";
import AntDesign from "@expo/vector-icons/AntDesign";

const subjects = [
  { id: 1, name: "Physics", date: "Today at 18:56", notes: 13, checked: false },
  {
    id: 2,
    name: "Chemistry",
    date: "Yesterday at 18:56",
    notes: 13,
    checked: false,
  },
  {
    id: 3,
    name: "Biology",
    date: "29/8/2024 at 18:56",
    notes: 13,
    checked: false,
  },
  {
    id: 4,
    name: "Mathematics",
    date: "29/8/2024 at 18:56",
    notes: 13,
    checked: false,
  },
  {
    id: 5,
    name: "Further P. Maths",
    date: "29/8/2024 at 18:56",
    notes: 13,
    checked: false,
  },
  {
    id: 6,
    name: "Economics",
    date: "29/8/2024 at 18:56",
    notes: 13,
    checked: false,
  },
];

const NoteTakingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [subjectList, setSubjectList] = useState(subjects);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isPanelVisible, setIsPanelVisible] = useState(false); // State to control panel visibility
  const bannerPosition = useRef(new Animated.Value(0)).current; // Banner animation state
  const panelPosition = useRef(new Animated.Value(300)).current; // Start the panel off-screen (300 units to the right)

  // Toggle all checkboxes
  const toggleAllCheckboxes = () => {
    const newCheckedState = !allChecked;
    const updatedSubjects = subjectList.map((subject) => ({
      ...subject,
      checked: newCheckedState,
    }));
    setSubjectList(updatedSubjects);
    setAllChecked(newCheckedState);
    handlePanelVisibility(newCheckedState); // Show panel if any checkbox is selected
  };

  // Toggle individual checkboxes
  const toggleCheckbox = (id) => {
    const updatedSubjects = subjectList.map((subject) =>
      subject.id === id ? { ...subject, checked: !subject.checked } : subject
    );
    setSubjectList(updatedSubjects);
    const isAnyChecked = updatedSubjects.some((subject) => subject.checked);
    handlePanelVisibility(isAnyChecked); // Show panel if any checkbox is selected
    setAllChecked(updatedSubjects.every((subject) => subject.checked));
  };

  // Function to hide the banner with an animation
  const hideBanner = () => {
    Animated.timing(bannerPosition, {
      toValue: 100, // Slide down by 100 units (adjust based on your needs)
      duration: 300, // Duration of the slide animation
      useNativeDriver: true, // Enable native driver for better performance
    }).start(() => {
      setIsBannerVisible(false); // After animation, hide the banner
    });
  };

  // Function to show or hide the floating panel
  const handlePanelVisibility = (show) => {
    Animated.timing(panelPosition, {
      toValue: show ? 0 : 300, // 0 means fully visible, 300 means hidden to the right
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsPanelVisible(show); // Update panel visibility state
    });
  };

  const filteredSubjects = subjectList.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item, drag, isActive }) => (
    <TouchableOpacity
      onLongPress={drag}
      disabled={isActive}
      style={[
        styles.subjectRow,
        {
          backgroundColor: item.checked
            ? "#ece9ff"
            : isActive
            ? "#f0f0f0"
            : "#fff",
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => toggleCheckbox(item.id)}
        style={styles.checkboxWrapper}
      >
        <Icon
          name={item.checked ? "check-box" : "check-box-outline-blank"}
          size={24}
          color="#7464e5"
        />
      </TouchableOpacity>
      <Text style={[styles.subjectName, styles.notebookColumn]}>
        {item.name}
      </Text>
      <Text style={[styles.subjectDate, styles.modifiedColumn]}>
        {item.date}
      </Text>
      <Text style={[styles.subjectNotes, styles.notesColumn]}>
        {item.notes}
      </Text>
      <View style={styles.actionWrapper}>
        {!item.checked && (
          <>
            <TouchableOpacity>
              <Entypo
                name="dots-three-horizontal"
                size={24}
                color={item.checked ? "black" : "#7464e5"}
              />
            </TouchableOpacity>
            <Icon name="chevron-right" size={20} color="#7464e5" />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header link="./../../settings/RootSettings" />
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.header}>Take Notes, Ace Exams</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 20 }}>
                <FontAwesome5 name="book" size={55} color="#7464e5" />
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Octicons name="dot-fill" size={12} color="black" />
                  <Text style={styles.subHeader}>
                    Create and automatically organize subject-specific
                    notebooks...
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Octicons name="dot-fill" size={12} color="black" />
                  <Text style={styles.description}>
                    Utilize advanced AI to compile and summarize notes,
                    improving
                    {"\n"}
                    study efficiency and revision effectiveness...
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search anything..."
              placeholderTextColor="black"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Sticky Table Header */}
        <View style={styles.stickyHeaderContainer}>
          <View style={styles.tableHeader}>
            <TouchableOpacity
              onPress={toggleAllCheckboxes}
              style={styles.checkboxWrapper}
            >
              <Icon
                name={allChecked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color="#7464e5"
              />
            </TouchableOpacity>
            <Text style={[styles.tableHeaderText, styles.notebookColumn]}>
              Notebooks {filteredSubjects.length}
            </Text>
            <Text style={[styles.tableHeaderText, styles.modifiedColumn]}>
              Last Modified
            </Text>
            <Text style={[styles.tableHeaderText, styles.notesColumn]}>
              Notes
            </Text>
            <Text style={[styles.tableHeaderText, styles.actionColumn]}>
              {"   "}
            </Text>
          </View>
        </View>

        {/* Draggable FlatList */}
        <DraggableFlatList
          data={filteredSubjects}
          onDragEnd={({ data }) => setSubjectList(data)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 320, paddingRight: 60 }}
          style={{ flexGrow: 1 }}
        />

        {/* Bottom Banner Section */}
        {isBannerVisible && (
          <Animated.View
            style={[
              styles.bottomBanner,
              {
                transform: [{ translateY: bannerPosition }],
              },
            ]}
          >
            <View style={styles.bannerTextContainer}>
              <Icon name="book" size={24} color="#7464e5" />
              <Text style={styles.bannerText}>
                2 of 3 Notebooks used{" "}
                <Text style={styles.bannerSubText}>
                  Upgrade to create unlimited notebooks
                </Text>
              </Text>
            </View>
            <View style={styles.bannerActions}>
              <TouchableOpacity onPress={hideBanner}>
                <Text style={styles.notNowText}>Not Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.upgradeButton}>
                <Text style={styles.upgradeText}>Upgrade</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}

        {/* Floating Panel */}
        {isPanelVisible && (
          <Animated.View
            style={[
              styles.floatingPanel,
              {
                transform: [{ translateX: panelPosition }],
              },
            ]}
          >
            <TouchableOpacity style={styles.panelButton}>
              <Icon name="info" size={16} color="#000" />
              <Text style={styles.panelText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
              <Icon name="share" size={16} color="#000" />
              <Text style={styles.panelText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
              <Icon name="download" size={16} color="#000" />
              <Text style={styles.panelText}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
              <Icon name="delete" size={16} color="#000" />
              <Text style={styles.panelText}>Delete</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 20, // Add some padding for spacing
            }}
          >
            <AntDesign name="pluscircle" size={80} color="black" />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    marginLeft: 60,
  },
  headerContainer: {
    paddingTop: 10,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    marginLeft: 4,
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    marginLeft: 4,
    marginRight: 60,
    fontSize: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  searchBar: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  stickyHeaderContainer: {
    marginTop: 30,
    backgroundColor: "#ededed",
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    marginRight: 60,
    shadowColor: "#7464e5",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 40,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: "center",
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  notebookColumn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modifiedColumn: {
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
  },
  notesColumn: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  actionColumn: {
    flex: 1,
    textAlign: "center",
  },
  subjectRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  checkboxWrapper: {
    width: 40,
    alignItems: "center",
  },
  subjectName: {
    fontSize: 20,
    color: "#7464e5",
  },
  subjectDate: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
  },
  subjectNotes: {
    textAlign: "center",
    fontSize: 16,
  },
  actionWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ededed",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 60,
  },
  bannerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
  },
  bannerText: {
    fontSize: 16,
    color: "#7464e5",
    fontWeight: "bold",
    marginLeft: 10,
  },
  bannerSubText: {
    color: "#999",
    fontSize: 14,
  },
  bannerActions: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 40,
  },
  notNowText: {
    color: "#7464e5",
    marginRight: 20,
  },
  upgradeButton: {
    backgroundColor: "#7464e5",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  upgradeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  floatingPanel: {
    position: "absolute",
    right: 0,
    top: 155, // Adjust this based on where you want it to start from vertically
    width: 55,
    backgroundColor: "#ece9ff",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  panelButton: {
    marginBottom: 15,
    alignItems: "center",
  },
  panelText: {
    fontSize: 12,
    color: "#000",
    marginTop: 5,
  },
});

export default NoteTakingPage;
