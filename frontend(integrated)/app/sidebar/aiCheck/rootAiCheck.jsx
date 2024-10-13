import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Header from "./../../../components/Header";
import { Link } from "expo-router";
import Sidebar from "./../../../components/SimpleSidebar";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const AICheckingScreen = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const [year, setYear] = useState(null);
  const [session, setSession] = useState(null);
  const [variant, setVariant] = useState(null);
  const [paper, setPaper] = useState(null);
  const [retrievePaper, setRetrievePaper] = useState(false); //

  const levels = ["O Level", "A level"];
  const boards = ["CIE", "EdExcel"];
  const [selectedLevel, setSelectedLevel] = useState("O Level");
  const [selectedBoard, setSelectedBoard] = useState("CIE");

  //DropDowns
  const [dropdownsVisible, setDropdownsVisible] = useState({
    year: false,
    session: false,
    variant: false,
    paper: false,
  });

  const yearOptions = [
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
  ];

  const [pressedItem, setPressedItem] = useState(null);

  const OLevelSubjectsEdExcel = [
    "English Language",
    "Mathematics",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Business Studies",
  ];

  const OLevelSubjectsCIE = [
    "First Language English",
    "Mathematics",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Literature in English",
  ];

  const ALevelSubjectsEdExcel = [
    "Mathematics",
    "Further Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English Literature",
    "History",
    "Geography",
  ];

  const ALevelSubjectsCIE = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English Language",
    "English Literature",
    "Economics",
    "Geography",
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const sessionOptions = [
    { label: "Jan/Feb", value: "jan_feb" },
    { label: "May/June", value: "may_june" },
  ];

  const variantOptions = [
    { label: "Variant 1", value: "variant_1" },
    { label: "Variant 2", value: "variant_2" },
  ];

  const paperOptions = [
    { label: "Paper 1", value: "paper_1" },
    { label: "Paper 2", value: "paper_2" },
  ];

  const retrievedPaper = [
    "retrievedPaper1",
    "retrievedPaper2",
    "retrievedPaper3",
  ];

  let queryArray;
  {
    if (selectedLevel === "O Level") {
      queryArray =
        selectedBoard === "CIE" ? OLevelSubjectsCIE : OLevelSubjectsEdExcel;
    } else {
      queryArray =
        selectedBoard === "CIE" ? ALevelSubjectsCIE : ALevelSubjectsEdExcel;
    }
  }

  let arrowColor = year ? "black" : "rgba(0, 0, 0, 0.3)";

  return (
    <View style={styles.container}>
      <Header link="./../../settings/RootSettings" />

      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <SafeAreaView>
        <View style={{ paddingBottom: 30 }}>
          <Text style={styles.heading}>AI Checking</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="checkcircleo" size={40} color="#8878f9" />
            <Text style={styles.description}>
              <Text style={{ fontWeight: "bold" }}>
                Don't waste time manually checking your papers
              </Text>
              . Solve and then check using our AI or directly upload solved
              papers and let our AI{"\n"}
              technology do the heavy lifting, while you focus on solving more
              papers and improving your grades.
            </Text>
          </View>
        </View>

        <ScrollView stickyHeaderHiddenOnScroll style={{ marginBottom: 200 }}>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                {levels.map((level, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.levelButton,
                      selectedLevel === level && styles.selectedButton,
                    ]}
                    onPress={() => {
                      setSelectedLevel(level);
                    }}
                  >
                    <Text
                      style={[
                        styles.toggleButtonText,
                        selectedLevel === level && styles.selectedText,
                      ]}
                    >
                      {level}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {boards.map((board, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.levelButton,
                      selectedBoard === board && styles.selectedButton,
                    ]}
                    onPress={() => {
                      setSelectedBoard(board);
                    }}
                  >
                    <Text
                      style={[
                        styles.toggleButtonText,
                        selectedBoard === board && styles.selectedText,
                      ]}
                    >
                      {board}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View>
              <View style={styles.yourSubjectContainer}>
                <Text style={styles.yourSubjectText}>Your Subjects</Text>
              </View>

              <View style={styles.subjectsContainer}>
                {queryArray.map((subject, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedSubject(subject);
                    }}
                    style={[
                      styles.touchableSubjects,
                      selectedSubject === subject && styles.selectedSubject,
                    ]}
                  >
                    <Text style={[styles.subject]}>{subject}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 1,
                width: "100%",
              }}
            ></View>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text style={styles.paperLabel}>
                  Which Paper are you Solving
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={[
                      styles.dropDownSelectYear,
                      year && { borderColor: "black", borderWidth: 1 },
                    ]}
                    onPress={() => {
                      setDropdownsVisible({
                        ...dropdownsVisible,
                        year: !dropdownsVisible.year,
                        session: false,
                        variant: false,
                        paper: false,
                      });
                    }}
                  >
                    {year ? (
                      <Text>{year}</Text>
                    ) : (
                      <Text style={[{ color: "rgba(0, 0, 0, 0.3)" }]}>
                        Select Year
                      </Text>
                    )}

                    <FontAwesome
                      name={
                        dropdownsVisible.year
                          ? "arrow-circle-up"
                          : "arrow-circle-down"
                      }
                      size={24}
                      color={year ? "black" : "rgba(0, 0, 0, 0.3)"}
                    />
                  </TouchableOpacity>

                  <View>
                    {dropdownsVisible.year && (
                      <ScrollView
                        style={{
                          height: 150,
                          width: 170,
                          backgroundColor: "white",
                          borderBottomStartRadius: 10,
                          borderBottomEndRadius: 10,
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          flexDirection: "column",
                        }}
                      >
                        {yearOptions.map((yearOption) => (
                          <View
                            key={yearOption.value}
                            style={[
                              {},
                              pressedItem === yearOption.value && {
                                backgroundColor: "#F8F8FF",
                              },
                            ]}
                          >
                            <TouchableOpacity
                              key={yearOption.value}
                              onPress={() => {
                                setYear(yearOption.value);
                                setDropdownsVisible({
                                  ...dropdownsVisible,
                                  year: !dropdownsVisible.year,
                                  session: false,
                                  variant: false,
                                  paper: false,
                                });
                              }}
                              style={[
                                {
                                  paddingLeft: 10,
                                  paddingBottom: 5,
                                  borderBottomWidth: 1,
                                },
                              ]}
                              onPressIn={() => setPressedItem(yearOption.value)} // Set pressed item on press
                              onPressOut={() => setPressedItem(null)} // Clear pressed item on release
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  paddingTop: 8,
                                }}
                              >
                                {yearOption.label}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </ScrollView>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    paddingTop: "3.5%",
                    width: 40,
                    paddingLeft: 5,
                    paddingRight: 0,
                  }}
                >
                  {year && (
                    <AntDesign name="arrowright" size={24} color="black" />
                  )}
                  {!year && (
                    <AntDesign
                      name="arrowright"
                      size={24}
                      color="rgba(0, 0, 0, 0.3)"
                    />
                  )}
                </View>
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={[
                      styles.dropDownSelectYear,
                      year && { borderColor: "black", borderWidth: 1 },
                    ]}
                    onPress={() => {
                      setDropdownsVisible({
                        ...dropdownsVisible,
                        year: false,
                        session: !dropdownsVisible.session,
                        variant: false,
                        paper: false,
                      });
                    }}
                  >
                    {session ? (
                      <Text>{session}</Text>
                    ) : (
                      <Text style={[{ color: "rgba(0, 0, 0, 0.3)" }]}>
                        Select Session
                      </Text>
                    )}
                    <FontAwesome
                      name={
                        dropdownsVisible.session
                          ? "arrow-circle-up"
                          : "arrow-circle-down"
                      }
                      size={24}
                      color={session ? "black" : "rgba(0, 0, 0, 0.3)"}
                    />
                  </TouchableOpacity>

                  <View>
                    {dropdownsVisible.session && (
                      <ScrollView
                        style={{
                          height: 150,
                          width: 170,
                          backgroundColor: "white",
                          borderBottomStartRadius: 10,
                          borderBottomEndRadius: 10,
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          flexDirection: "column",
                        }}
                      >
                        {sessionOptions.map((sessionOption) => (
                          <View
                            key={sessionOption.value}
                            style={[
                              {},
                              pressedItem === sessionOption.value && {
                                backgroundColor: "#F8F8FF",
                              },
                            ]}
                          >
                            <TouchableOpacity
                              style={{
                                paddingLeft: 10,
                                paddingBottom: 5,
                                borderBottomWidth: 1,
                              }}
                              onPress={() => {
                                setSession(sessionOption.value);
                                setDropdownsVisible({
                                  ...dropdownsVisible,
                                  year: false,
                                  session: !dropdownsVisible.session,
                                  variant: false,
                                  paper: false,
                                });
                              }}
                              onPressIn={() =>
                                setPressedItem(sessionOption.value)
                              } // Set pressed item on press
                              onPressOut={() => setPressedItem(null)} // Clear pressed item on release
                            >
                              <Text style={{ fontSize: 20, paddingTop: 8 }}>
                                {sessionOption.label}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </ScrollView>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    paddingTop: "3.5%",
                    width: 40,
                    paddingLeft: 5,
                    paddingRight: 0,
                  }}
                >
                  {session && (
                    <AntDesign name="arrowright" size={24} color="black" />
                  )}
                  {!session && (
                    <AntDesign
                      name="arrowright"
                      size={24}
                      color="rgba(0, 0, 0, 0.3)"
                    />
                  )}
                </View>
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={[
                      styles.dropDownSelectYear,
                      year && { borderColor: "black", borderWidth: 1 },
                    ]}
                    onPress={() => {
                      setDropdownsVisible({
                        ...dropdownsVisible,
                        year: false,
                        session: false,
                        variant: !dropdownsVisible.variant,
                        paper: false,
                      });
                    }}
                  >
                    {variant ? (
                      <Text>{variant}</Text>
                    ) : (
                      <Text style={{ color: "rgba(0, 0, 0, 0.3)" }}>
                        Select variant
                      </Text>
                    )}
                    <FontAwesome
                      name={
                        dropdownsVisible.variant
                          ? "arrow-circle-up"
                          : "arrow-circle-down"
                      }
                      size={24}
                      color={variant ? "black" : "rgba(0, 0, 0, 0.3)"}
                    />
                  </TouchableOpacity>

                  <View>
                    {dropdownsVisible.variant && (
                      <ScrollView
                        style={{
                          height: 150,
                          width: 170,
                          backgroundColor: "white",
                          borderBottomStartRadius: 10,
                          borderBottomEndRadius: 10,
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          flexDirection: "column",
                        }}
                      >
                        {variantOptions.map((variantOption) => (
                          <View
                            key={variantOption.value}
                            style={[
                              {},
                              pressedItem === variantOption.value && {
                                backgroundColor: "#F8F8FF",
                              },
                            ]}
                          >
                            <TouchableOpacity
                              style={{
                                paddingLeft: 10,
                                paddingBottom: 5,
                                borderBottomWidth: 1,
                              }}
                              onPress={() => {
                                setVariant(variantOption.value);
                                setDropdownsVisible({
                                  ...dropdownsVisible,
                                  year: false,
                                  session: false,
                                  variant: !dropdownsVisible.variant,
                                  paper: false,
                                });
                              }}
                              onPressIn={() =>
                                setPressedItem(variantOption.value)
                              } // Set pressed item on press
                              onPressOut={() => setPressedItem(null)} // Clear pressed item on release
                            >
                              <Text style={{ fontSize: 20, paddingTop: 8 }}>
                                {variantOption.label}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </ScrollView>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    paddingTop: "3.5%",
                    width: 40,
                    paddingLeft: 5,
                    paddingRight: 0,
                  }}
                >
                  {variant && (
                    <AntDesign name="arrowright" size={24} color="black" />
                  )}
                  {!variant && (
                    <AntDesign
                      name="arrowright"
                      size={24}
                      color="rgba(0, 0, 0, 0.3)"
                    />
                  )}
                </View>
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={[
                      styles.dropDownSelectYear,
                      year && { borderColor: "black", borderWidth: 1 },
                    ]}
                    onPress={() => {
                      setDropdownsVisible({
                        ...dropdownsVisible,
                        year: false,
                        session: false,
                        variant: false,
                        paper: !dropdownsVisible.paper,
                      });
                    }}
                  >
                    {paper ? (
                      <Text>{paper}</Text>
                    ) : (
                      <Text style={[{ color: "rgba(0, 0, 0, 0.3)" }]}>
                        Select Paper
                      </Text>
                    )}
                    <FontAwesome
                      name={
                        dropdownsVisible.paper
                          ? "arrow-circle-up"
                          : "arrow-circle-down"
                      }
                      size={24}
                      color={paper ? "black" : "rgba(0, 0, 0, 0.3)"}
                    />
                  </TouchableOpacity>

                  <View>
                    {dropdownsVisible.paper && (
                      <ScrollView
                        style={{
                          height: 150,
                          width: 170,
                          backgroundColor: "white",
                          borderBottomStartRadius: 10,
                          borderBottomEndRadius: 10,
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          flexDirection: "column",
                        }}
                      >
                        {paperOptions.map((paperOption) => (
                          <View
                            key={paperOption.value}
                            style={[
                              {},
                              pressedItem === paperOption.value && {
                                backgroundColor: "#F8F8FF",
                              },
                            ]}
                          >
                            <TouchableOpacity
                              style={{
                                paddingLeft: 10,
                                paddingBottom: 5,
                                borderBottomWidth: 1,
                              }}
                              onPress={() => {
                                setPaper(paperOption.value);
                                setDropdownsVisible({
                                  ...dropdownsVisible,
                                  year: false,
                                  session: false,
                                  variant: false,
                                  paper: !dropdownsVisible.paper,
                                });
                              }}
                              key={paperOption.value}
                              onPressIn={() =>
                                setPressedItem(paperOption.value)
                              } // Set pressed item on press
                              onPressOut={() => setPressedItem(null)} // Clear pressed item on release
                            >
                              <Text style={{ fontSize: 20, paddingTop: 8 }}>
                                {paperOption.label}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </ScrollView>
                    )}
                  </View>
                  {year && session && variant && paper && (
                    <View style={{ marginTop: 30 }}>
                      <TouchableOpacity
                        style={{
                          padding: 10,
                          backgroundColor: "#7630ff",
                          borderRadius: 10,
                        }}
                        onPress={() => {
                          setRetrievePaper(true);
                        }}
                      >
                        <Text style={{ fontSize: 26, color: "white" }}>
                          Retrieve Paper
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#000",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 20,
            }}
          ></View>

          {retrievePaper && (
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  {retrievedPaper.map((paper, index) => (
                    <View key={index} style={{ flexDirection: "row" }}>
                      <View style={{ paddingTop: 10 }}>
                        <FontAwesome6
                          name="paperclip"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text key={index} style={{ fontSize: 24, padding: 10 }}>
                        {paper}
                      </Text>
                    </View>
                  ))}
                </View>
                <View
                  style={{
                    flexDirection: "Column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    asChild
                    href={{ pathname: "sidebar/aiCheck/AiCheckResultView" }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#6522eb",
                        borderRadius: 30,
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                      }}
                    >
                      <Text style={{ fontSize: 26, color: "white" }}>
                        Solve
                      </Text>
                    </TouchableOpacity>
                  </Link>
                  <Text style={{ fontSize: 14 }}>
                    {"           "}And {"  \n"}Check{" "}
                    <Text style={{ fontSize: 18, color: "#6522eb" }}>
                      using AI
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <View
                  style={{
                    borderTopColor: "#000",
                    borderTopWidth: 1,
                    width: "48.5%",
                    marginTop: 17,
                  }}
                ></View>
                <View
                  style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10 }}
                >
                  <Text style={{ fontWeight: "700" }}>OR</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                    width: "48.5%",
                    marginBottom: 5,
                  }}
                ></View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 30,
                  paddingBottom: 30,
                }}
              >
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{ paddingTop: 5 }}>Only PDF is Accepted</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{ paddingTop: 5 }}>
                      Make sure the full document is uploaded
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{ paddingTop: 5 }}>
                      Make sure the writings are visible & clear as our AI
                      {"\n"} relies on OCR technology.
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#6522eb",
                      borderRadius: 10,
                      padding: 20,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 30 }}>
                      Upload Solved Papers
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    paddingTop: 5,
    paddingLeft: 8,
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
  },
  yourSubjectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
  },
  yourSubjectText: {
    fontSize: 24,
  },
  subjectsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  touchableSubjects: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  subject: {
    fontSize: 16,
    padding: 4,
    margin: 5,
  },
  selectedSubject: {
    backgroundColor: "#d1c4e9",
  },
  dropdownContainer: {
    marginVertical: 20,
    flexDirection: "column",
  },
  paperLabel: {
    paddingTop: 10,
    fontSize: 22,
    marginBottom: 5,
  },
  levelButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 30,
    backgroundColor: "#fff",
    color: "white",
    borderRadius: 10,
    marginLeft: 3,
  },
  selectedButton: {
    backgroundColor: "#8878f9",
  },
  toggleButtonText: {
    fontWeight: 500,
  },
  selectedText: {
    fontWeight: 500,
    color: "white",
  },
  dropDownSelectYear: {
    width: 170,
    height: 40,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  dropDownPlaceHolder: {
    flexDirection: "row",
  },
});

export default AICheckingScreen;
