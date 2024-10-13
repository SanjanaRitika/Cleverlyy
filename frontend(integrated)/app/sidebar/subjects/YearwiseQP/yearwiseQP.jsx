import React, { useState, useEffect, useRef } from "react";
import Header from "./../../../../components/Header";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
  Dimensions,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Link } from "expo-router";
import Sidebar from "./../../../../components/SimpleSidebar"; // Import the Icon component

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 3 - 20; // Each card takes 1/3 of the screen width
const SPACING_FOR_CARD_INSET = width * 0.1 - 10; // Space before the first card

const YearwiseQPs = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const waveAnim = useRef(new Animated.Value(0)).current;
  const cardAnim = useRef(new Animated.Value(0)).current;
  const viewAnim = useRef(new Animated.Value(0)).current; // Animation for the new view

  const scrollX = useRef(new Animated.Value(0)).current;

  const years = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ];
  const sessions = ["Jan/Feb", "May/June", "Oct/Nov"];
  const [variants, setVariants] = useState([
    {
      id: 1,
      papers: [
        { id: 1, solved: true, score: 76, grade: "A" },
        { id: 2, solved: true, score: 72, grade: "A" },
        { id: 3, solved: false },
        { id: 4, solved: false },
      ],
    },
    {
      id: 2,
      papers: [
        { id: 1, solved: true, score: 76, grade: "A" },
        { id: 2, solved: true, score: 72, grade: "A" },
        { id: 3, solved: false },
        { id: 4, solved: false },
      ],
    },
    {
      id: 3,
      papers: [
        { id: 1, solved: true, score: 76, grade: "A" },
        { id: 2, solved: true, score: 72, grade: "A" },
        { id: 3, solved: false },
        { id: 4, solved: false },
      ],
    },
    {
      id: 4,
      papers: [
        { id: 1, solved: true, score: 76, grade: "A" },
        { id: 2, solved: true, score: 72, grade: "A" },
        { id: 3, solved: false },
        { id: 4, solved: false },
      ],
    },
  ]);

  const [cardBorderColor, setCardBorderColor] = useState("#ccc");

  useEffect(() => {
    const latestYear = years[0];
    const latestSession = sessions[0];
    setSelectedYear(latestYear);
    setSelectedSession(latestSession);
  }, []);

  useEffect(() => {
    if (selectedYear && selectedSession) {
      cardAnim.setValue(0);
      Animated.timing(cardAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  }, [selectedYear, selectedSession]);

  const selectYear = (year) => {
    setSelectedYear(year);
    waveAnim.setValue(0);
    cardAnim.setValue(0); // Reset card animation
    Animated.timing(waveAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const selectSession = (session) => {
    setSelectedSession(session);
    setCardBorderColor("red");
    cardAnim.setValue(0);
    Animated.timing(cardAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const toggleCheckbox = (variantId, paperId) => {
    setVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === variantId
          ? {
              ...variant,
              papers: variant.papers.map((paper) =>
                paper.id === paperId
                  ? { ...paper, solved: !paper.solved }
                  : paper
              ),
            }
          : variant
      )
    );
  };

  const anyPaperSelected = () => {
    return variants.some((variant) =>
      variant.papers.some((paper) => paper.solved)
    );
  };

  useEffect(() => {
    if (anyPaperSelected()) {
      Animated.timing(viewAnim, {
        toValue: 1.2,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(viewAnim, {
        toValue: 0.7,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  }, [variants]);

  console.log(anyPaperSelected);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.container}>
      <Header link="./../../../settings/RootSettings" />
      {/* Sidebar Component */}
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <ScrollView style={{ paddingLeft: 40, paddingRight: 20 }}>
        <View
          style={{
            backgroundColor: "#eee5ff",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={styles.header}>
            Cambridge Chemistry : O-level : Yearwise QPs
          </Text>

          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.yearSelector}
          >
            {years.map((year, index) => (
              <TouchableOpacity
                key={index}
                style={styles.yearButtonContainer}
                onPress={() => selectYear(year)}
              >
                <View style={styles.pointerContainer}>
                  <Text
                    style={[
                      styles.yearText,
                      selectedYear === year && styles.selectedText,
                    ]}
                  >
                    {year}
                  </Text>
                  {selectedYear === year && (
                    <View style={styles.pointer}></View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {selectedYear && (
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                backgroundColor: waveAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#f7f7f7", "#f7f7f7"],
                }),
                transform: [
                  {
                    scale: waveAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.05],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.sessionsContainer}>
              {sessions.map((session, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.sessionTab,
                    selectedSession === session && styles.selectedSessionTab,
                  ]}
                  onPress={() => selectSession(session)}
                >
                  <Text
                    style={[
                      styles.sessionTabText,
                      selectedSession === session && styles.selectedSessionText,
                    ]}
                  >
                    {session}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        )}

        {selectedYear && selectedSession && (
          <Animated.View
            style={[
              styles.variantContainer,
              {
                opacity: cardAnim,
                transform: [
                  {
                    scale: cardAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.95, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Animated.View
              style={[
                styles.animatedView,
                {
                  opacity: viewAnim,
                  transform: [
                    {
                      scale: viewAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.95, 1], // Add scaling animation when view appears
                      }),
                    },
                  ],
                },
              ]}
            >
              {!anyPaperSelected() ? (
                <View
                  style={{
                    padding: 20,
                    borderRadius: 10,
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#333",
                    }}
                  >
                    Please select a paper to view details.
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    marginTop: 8,
                    marginBottom: 25,
                    marginLeft: 5,
                  }}
                >
                  <SafeAreaView
                    style={{
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <View>
                      <View
                        style={{
                          marginBottom: 20,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            color: "#555",
                            marginBottom: 4,
                          }}
                        >
                          Cambridge O Level: Chemistry
                        </Text>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          2019: May/June Variant 1 Paper 1
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#8c7bff",
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderRadius: 8,
                            alignSelf: "flex-start",
                            marginBottom: 10,
                          }}
                        >
                          <Text>Solve</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View
                      style={{
                        flex: 2,
                        justifyContent: "space-between",
                        height: 120,
                        paddingLeft: 50,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#8c7bff",
                          paddingVertical: 10,
                          paddingHorizontal: 15,
                          borderRadius: 8,
                          alignSelf: "flex-start", // This ensures the button takes only as much space as its content
                          marginBottom: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 14,
                            textAlign: "center",
                          }}
                        >
                          View Question paper
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#8c7bff",
                          paddingVertical: 10,
                          paddingHorizontal: 15,
                          borderRadius: 8,
                          alignSelf: "flex-start", // This ensures the button takes only as much space as its content
                          marginBottom: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 14,
                            textAlign: "center",
                          }}
                        >
                          View Markschemes
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          paddingVertical: 10,
                          paddingHorizontal: 15,
                          borderRadius: 8,
                          alignSelf: "flex-start", // This ensures the button takes only as much space as its content
                          marginBottom: 10,
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "#f7f7f7",
                          borderColor: "#ccc",
                          borderWidth: 1,
                        }}
                      >
                        <Text
                          style={{
                            color: "#333",
                            fontSize: 14,
                            marginRight: 8,
                          }}
                        >
                          View Both
                        </Text>
                        <Icon
                          name="menu-book"
                          size={20}
                          color="#555"
                          style={{ marginRight: 8 }}
                        />
                        <Icon name="list-alt" size={20} color="#555" />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#555",
                          marginBottom: 8,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        Previous Marks
                        <Icon name="info-outline" size={16} color="#555" />
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 8,
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#e3dbff",
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            marginRight: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#333",
                              fontSize: 14,
                            }}
                          >
                            73 (A)
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: "#e3dbff",
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            marginRight: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#333",
                              fontSize: 14,
                            }}
                          >
                            64 (B)
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 8,
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#e3dbff",
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            marginRight: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#333",
                              fontSize: 14,
                            }}
                          >
                            59 (B)
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: "#e7ffdb",
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            marginRight: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#333",
                              fontSize: 14,
                            }}
                          >
                            64 (B)
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            paddingHorizontal: 8,
                          }}
                        >
                          <Icon name="chevron-right" size={24} color="#555" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </SafeAreaView>
                </View>
              )}
            </Animated.View>

            <Animated.ScrollView
              horizontal
              pagingEnabled
              snapToInterval={CARD_WIDTH + 20} // snap to each card
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: SPACING_FOR_CARD_INSET + 10, // Adjust padding to show 3 cards
              }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              scrollEventThrottle={16}
            >
              {variants.map((variant, index) => {
                const inputRange = [
                  (index - 1) * CARD_WIDTH,
                  index * CARD_WIDTH,
                  (index + 1) * CARD_WIDTH,
                ];

                const scale = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.9, 1, 0.9],
                  extrapolate: "clamp",
                });

                return (
                  <Animated.View
                    key={variant.id}
                    style={[
                      styles.variantCard,
                      {
                        transform: [{ scale }],
                      },
                    ]}
                  >
                    <Text style={styles.variantTitle}>
                      Variant {variant.id}
                    </Text>
                    <Text style={styles.variantSubText}>(11, 21, 31, 41)</Text>
                    <View
                      key={variant.id}
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text style={styles.lastSolvedText}>Last Solved</Text>
                    </View>

                    {variant.papers.map((paper, index) => (
                      <View key={index} style={styles.paperRow}>
                        <TouchableOpacity
                          style={[
                            styles.checkbox,
                            paper.solved && styles.checkboxChecked,
                          ]}
                          onPress={() => toggleCheckbox(variant.id, paper.id)}
                        >
                          {paper.solved && (
                            <Icon name="check" size={16} color="#fff" />
                          )}
                        </TouchableOpacity>
                        <Text style={styles.paperText}>Paper {paper.id}</Text>
                        {paper.solved ? (
                          <Text style={styles.solvedText}>
                            {paper.score} ({paper.grade})
                          </Text>
                        ) : (
                          <Text style={styles.unsolvedText}>_____</Text>
                        )}
                      </View>
                    ))}
                  </Animated.View>
                );
              })}
            </Animated.ScrollView>
          </Animated.View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    paddingTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  yearSelector: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 30,
    justifyContent: "space-between",
  },
  yearButtonContainer: {
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#8c7bff",
    borderRadius: 10,
    justifyContent: "center",
  },
  pointerContainer: {
    alignItems: "center",
  },
  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white",
    marginTop: 4,
  },
  yearText: {
    fontSize: 16,
    color: "black",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },
  selectedText: {
    fontWeight: "bold",
    color: "white",
  },
  selectedSessionText: {
    fontWeight: "bold",
    color: "black",
  },
  animatedContainer: {
    marginTop: 15,
    paddingTop: 15,
    marginBottom: 1,
    marginHorizontal: 7,
  },
  sessionsContainer: {
    flexDirection: "row", // Ensure sessions are laid out in a row
    justifyContent: "flex-start", // Align items to the left
    alignItems: "center", // Align items vertically centered
    // backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    // marginBottom: 20,
  },
  sessionTab: {
    paddingVertical: 10,
    paddingHorizontal: 15, // Adjust this for desired spacing
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10, // Add spacing between session tabs
  },
  selectedSessionTab: {
    borderRadius: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#eee5ff",
  },
  sessionTabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
  variantContainer: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "column",
    backgroundColor: "#eee5ff",
  },
  variantCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    width: CARD_WIDTH,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeVariantCard: {
    borderColor: "#7e5bef",
    borderWidth: 2,
  },
  variantTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  variantSubText: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  lastSolvedText: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  paperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  paperText: {
    fontSize: 14,
    color: "#555",
  },
  solvedText: {
    fontSize: 14,
    color: "#4CAF50",
  },
  unsolvedText: {
    fontSize: 14,
    color: "#bbb",
  },
  animatedView: {
    marginBottom: 25,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default YearwiseQPs;