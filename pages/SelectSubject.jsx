import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "./../../components/Header";
import SearchComponent from "./../../components/SearchComponent";

const data = [
    "Biology",
    "Chemistry",
    "Basic Maths",
    "Geography",
    "Economics",
    "Literature",
    "Law",
    "History",
];
const SelectSubject = () => {
  return (
    <View style={styles.try}>
      <Header />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2%",
            marginBottom: "3%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Select your <Text style={{ color: "#4B9CD3" }}> Subjects</Text>{" "}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            You can select one or more{" "}
          </Text>
        </View>
        <SearchComponent
          data={data}
          placeholder="Search your Subject here..."
          next="PlanSelectionScreen"
          multiSelect={true}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1e1e1e",
  },
  try: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
});

export default SelectSubject;
