import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "./../../components/Header";
import SearchComponent from "./../../components/SearchComponent";
import { useLocalSearchParams } from "expo-router";

const data = [
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];
const SelectYearGroup = () => {
  selectedData = useLocalSearchParams();
  console.log(selectedData);
  return (
    <View style={styles.try}>
      <Header link="./../settings/RootSettings" />
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
            Select the <Text style={{ color: "#263eff" }}> Year Group</Text>{" "}
          </Text>
        </View>
        <SearchComponent
          data={data}
          placeholder="Search your year group here..."
          next="SelectExam"
          multiSelect={false}
          modal={false}
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

export default SelectYearGroup;
