import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State to track submenu open/close

  const [pressedItem, setPressedItem] = useState(null);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "view-dashboard",
      submenu: false,
      path: "dashboard/RootDash",
    },
    {
      id: "subjects",
      label: "Subjects",
      icon: "book-outline",
      submenu: false,
      path: "subjects/RootSubjects",
    },
    {
      id: "resources",
      label: "Resources",
      icon: "folder",
      submenu: true, // Marking it as a parent item with submenu
      path: "resrc/rootResrc",
    },
    {
      id: "progress",
      label: "Progress",
      icon: "chart-line",
      submenu: false,
      path: "progress/rootProgress",
    },
    {
      id: "notes",
      label: "Notes",
      icon: "notebook",
      submenu: false,
      path: "notes/rootNotes",
    },
    {
      id: "check",
      label: "AI Check",
      icon: "robot",
      submenu: false,
      path: "aiCheck/rootAiCheck",
    },
    {
      id: "calendars",
      label: "Calendars",
      icon: "calendar-month",
      submenu: false,
      path: "calenders/rootCalenders",
    },
    {
      id: "forum",
      label: "Forum",
      icon: "forum",
      submenu: false,
      path: "forum/rootForum",
    },
    {
      id: "tips",
      label: "Tips & Hints",
      icon: "lightbulb-on",
      submenu: false,
      path: "tipshints/rootTips",
    },
  ];

  const submenuItems = [
    {
      id: "yearwise",
      label: "Year-wise        ",
      icon: "calendar-today",
      path: "resrc/subResrc/YearWise",
    },
    {
      id: "chapterwise",
      label: "Chapter-wise  ",
      icon: "book-open-variant",
      path: "resrc/subResrc/ChapterWise",
    },
    {
      id: "revisionnotes",
      label: "Revision Notes",
      icon: "notebook-outline",
      path: "resrc/subResrc/RevisionNotes",
    },
    {
      id: "Other Resources",
      label: "Other Resources",
      icon: "notebook-outline",
      path: "resrc/subResrc/otherResources",
    },
  ];

  return (
    <>
      {/* Sidebar Content */}

      {isVisible && (
        <Animated.View
          style={[
            styles.sidebarContainer,
            styles.visible,
            // isVisible ? styles.visible : styles.hidden,
          ]}
        >
          {/* Toggle Button Inside Sidebar */}
          <TouchableOpacity
            style={styles.toggleButtonInside}
            onPress={toggleSidebar}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: "50%",
                padding: 10,
                borderColor: "white",
              }}
            >
              <MaterialCommunityIcons
                name="arrow-expand-left"
                size={26}
                color="white"
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>CLEVERLYY</Text>
          <ScrollView>
            {menuItems.map((item) => {
              // Handling Resources to expand/collapse its submenu
              if (item.label === "Resources") {
                return (
                  <View key={item.id}>
                    <Link
                      href={{
                        pathname: `sidebar/${item.path}`,
                      }}
                      key={item.id}
                      asChild
                      // style={[styles.menuItem]}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          setIsResourcesOpen(!isResourcesOpen);
                          setPressedItem(item.label);
                        }} // Toggle the submenu
                      >
                        <View
                          style={[
                            styles.menuItem,
                            styles.resourcesStyle,
                            pressedItem === item.label && {
                              backgroundColor: "white",
                              borderRadius: 5,
                              marginRight: 8,
                              paddingVertical: 7,
                            },
                          ]}
                        >
                          {pressedItem === item.label ? (
                            <Icon
                              name={item.icon}
                              size={24}
                              color="black"
                              style={styles.icon}
                            />
                          ) : (
                            <Icon
                              name={item.icon}
                              size={24}
                              color="white"
                              style={styles.icon}
                            />
                          )}

                          <Text
                            style={[
                              styles.text,
                              styles.resourcesText,
                              pressedItem === item.label && {
                                color: "black",
                                fontWeight: "600",
                              },
                            ]}
                          >
                            {item.label}
                          </Text>

                          <Icon
                            name={
                              isResourcesOpen ? "chevron-up" : "chevron-down"
                            } // Arrow icon based on state
                            size={24}
                            color={
                              pressedItem === item.label ? "black" : "white"
                            }
                            style={[styles.icon, styles.iconArrow]}
                          />
                        </View>
                      </TouchableOpacity>
                    </Link>

                    {/* Submenu items for Resources */}
                    {isResourcesOpen && (
                      <View
                        style={{
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        {submenuItems.map((subItem) => (
                          <Link
                            href={{
                              pathname: `sidebar/${subItem.path}`,
                            }}
                            style={styles.submenuItem}
                            key={subItem.id}
                            asChild
                          >
                            <TouchableOpacity
                              style={{ flexDirection: "row" }}
                              onPress={() => {
                                setPressedItem(subItem.label);
                              }}
                            >
                              <Icon
                                name={subItem.icon}
                                size={23}
                                color="#fff"
                                style={{ paddingRight: 5 }}
                              />
                              <View style={{ flexDirection: "column" }}>
                                <Text style={[styles.text, styles.subText]}>
                                  {subItem.label}
                                </Text>
                                {pressedItem === subItem.label && (
                                  <View
                                    style={{
                                      borderBottomWidth: 1,
                                      marginRight: 12,
                                      paddingTop: 2,
                                      backgroundColor: "white",
                                    }}
                                  ></View>
                                )}
                              </View>
                            </TouchableOpacity>
                          </Link>
                        ))}
                      </View>
                    )}
                  </View>
                );
              }

              return (
                <View key={item.id}>
                  <Link
                    href={{
                      pathname: `sidebar/${item.path}`,
                    }}
                    key={item.id}
                    style={[styles.menuItem]}
                    asChild
                  >
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        setPressedItem(item.label);
                      }}
                      style={[
                        {
                          paddingRight: 40,
                          margin: 0,
                          margin: 10,
                        },
                      ]}
                    >
                      <View
                        style={[
                          {
                            flexDirection: "row",
                            marginBottom: 10,
                            padding: 10,
                            marginRight: 10,
                          },
                          pressedItem === item.label && {
                            backgroundColor: "white",
                            borderRadius: 5,
                          },
                        ]}
                      >
                        <View style={[{ paddingRight: 5, paddingTop: 0 }]}>
                          {pressedItem === item.label ? (
                            <View>
                              <Icon
                                name={item.icon}
                                size={27}
                                color="black"
                                style={styles.icon}
                              />
                            </View>
                          ) : (
                            <View>
                              <Icon
                                name={item.icon}
                                size={27}
                                color="white"
                                style={styles.icon}
                              />
                            </View>
                          )}
                        </View>
                        <View>
                          <Text
                            style={[
                              styles.text,
                              pressedItem === item.label && {
                                color: "black",
                              },
                            ]}
                          >
                            {item.label}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Link>
                </View>
              );
            })}
          </ScrollView>
        </Animated.View>
      )}
      {!isVisible && (
        <Animated.View
          style={{
            width: 220,
            backgroundColor: "rgba(116,107,201,255)",
            paddingVertical: 15,
            paddingLeft: 40,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 10,
            transform: [{ translateX: -130 }],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 10,
            }}
          >
            <TouchableOpacity
              style={styles.toggleButtonInside}
              onPress={toggleSidebar}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  padding: 10,
                  borderColor: "white",
                }}
              >
                <MaterialCommunityIcons
                  name="arrow-expand-right"
                  size={26}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                {menuItems.map((item) => (
                  <Link
                    href={{
                      pathname: `sidebar/${item.path}`,
                    }}
                    key={item.id}
                    asChild
                  >
                    <TouchableOpacity
                      key={item.id}
                      style={{ marginBottom: 20, marginRight: 6 }}
                      onPress={() => {
                        setPressedItem(item.label);
                      }}
                    >
                      {pressedItem === item.label ? (
                        <View
                          style={{
                            borderWidth: 3,
                            padding: 5,
                            borderRadius: "50%",
                            borderColor: "black",
                          }}
                        >
                          <Icon
                            name={item.icon}
                            size={30}
                            color="white"
                            style={styles.icon}
                          />
                        </View>
                      ) : (
                        <View
                          style={{
                            borderWidth: 2,
                            padding: 5,
                            borderRadius: "50%",
                            borderColor: "white",
                          }}
                        >
                          <Icon
                            name={item.icon}
                            size={30}
                            color="white"
                            style={styles.icon}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    width: 220,
    backgroundColor: "rgba(116,107,201,255)",
    paddingVertical: 15,
    paddingLeft: 40,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
    transform: [{ translateX: -250 }],
    borderRadius: 15,
  },
  visible: {
    transform: [{ translateX: 0 }],
  },
  hidden: {
    transform: [{ translateX: -180 }],
  },
  headerText: {
    fontSize: 30,
    flexDirection: "row",
    alignSelf: "flex-start",
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 1,
  },
  resourcesStyle: {
    paddingLeft: 13,
    marginBottom: 15,
    marginTop: 5,
  },
  submenuItem: {
    marginVertical: 8,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 5,
    paddingTop: 5,
    paddingRight: 10,
    fontWeight: "500",
  },
  subText: {
    fontSize: 16,
  },
  resourcesText: {
    marginLeft: 10,
  },
  icon: {},
  iconArrow: {
    paddingTop: 8,
  },
  toggleButtonInside: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginBottom: 20,
  },
  toggleButtonOutside: {
    position: "absolute",
    top: 20,
    left: 25,
    backgroundColor: "#1c1c1e",
    padding: 10,
    borderRadius: 50,
    zIndex: 20,
  },
});

export default Sidebar;