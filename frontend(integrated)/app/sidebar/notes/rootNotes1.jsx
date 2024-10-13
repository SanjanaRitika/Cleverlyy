import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";

// Sample data structure
const subjectsData = [
  {
    subject: "Physics",
    subtopics: [
      "Forces of Motion",
      "Electricity",
      "Waves",
      "Energy Resources",
      "Solids, Liquids & Gases",
      "Magnetism & Electromagnetism",
      "Radioactivity",
      "Astrophysics",
    ],
  },
  {
    subject: "Chemistry",
    subtopics: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Reactions",
      "Organic Chemistry",
    ],
  },
  {
    subject: "Biology",
    subtopics: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Reactions",
      "Organic Chemistry",
    ],
  },
  {
    subject: "Mathematics",
    subtopics: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Reactions",
      "Organic Chemistry",
    ],
  },
  {
    subject: "Business Studies",
    subtopics: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Reactions",
      "Organic Chemistry",
    ],
  },
  {
    subject: "English",
    subtopics: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Reactions",
      "Organic Chemistry",
    ],
  },
  {
    subject: "Computer Science",
    subtopics: [
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "Reactions",
      "Organic Chemistry",
    ],
  },
  // Add other subjects and subtopics similarly
];

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  // Handles subject selection
  const handleSubjectSelect = (subject) => {
    if (selectedSubject === subject) {
      setSelectedSubject(null); // Deselect the subject if clicked again
    } else {
      setSelectedSubject(subject); // Set the selected subject
      setSelectedSubtopic(null); // Reset the selected subtopic
    }
  };

  const renderSubjectItem = ({ item }) => (
    <TouchableOpacity
      style={styles.subjectButton}
      onPress={() => handleSubjectSelect(item.subject)}
    >
      <Text style={styles.subjectText}>
        {<Entypo name="book" size={24} color="#5e17eb" />} {item.subject}
      </Text>
    </TouchableOpacity>
  );

  const renderSubtopicItem = ({ item }) => (
    <TouchableOpacity
      style={styles.subtopicButton}
      onPress={() => setSelectedSubtopic(item)}
    >
      <Text style={styles.subtopicText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Left Sidebar (Subjects List) */}
      <View style={styles.sidebar}>
        <FlatList
          data={subjectsData}
          renderItem={renderSubjectItem}
          keyExtractor={(item) => item.subject}
        />
      </View>

      {/* Middle Section (Subtopics) */}
      <View style={styles.subtopicsSection}>
        {selectedSubject ? (
          <FlatList
            data={
              subjectsData.find(
                (subject) => subject.subject === selectedSubject
              )?.subtopics
            }
            renderItem={renderSubtopicItem}
            keyExtractor={(item) => item}
          />
        ) : (
          <Text>Select a subject to view subtopics</Text>
        )}
      </View>

      {/* Right Section (Subtopic Content) */}
      <View style={styles.contentSection}>
        {selectedSubtopic ? (
          <ScrollView>
            <Text style={styles.contentTitle}>{selectedSubtopic}</Text>
            <Text>
              This is where the content for the selected subtopic will go.
            </Text>
          </ScrollView>
        ) : (
          <Text>Select a subtopic to view content</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  sidebar: {
    width: "20%",
    backgroundColor: "white",
    padding: 10,
  },
  subtopicsSection: {
    width: "30%",
    backgroundColor: "#e4e0ff",
    padding: 10,
  },
  contentSection: {
    width: "50%",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  subjectButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: "#eee5ff",
    borderRadius: 5,
    marginBottom: 5,
  },
  subjectText: {
    paddingLeft: 10,
    color: "black",
    fontWeight: "bold",
  },
  subtopicButton: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 5,
  },
  subtopicText: {
    color: "black",
    fontWeight: "500",
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
