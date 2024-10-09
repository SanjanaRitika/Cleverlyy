import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";
import SearchComponent from "../../components/SearchComponent";
import SimpleSidebar from '../../components/SimpleSidebar';


const data = [
  "Bangladesh",
  "USA",
  "China",
  "Russia",
  "Ukraine",
  "Canada",
  "Germany",
  "Australia",
  "Switzerland",
];

const SelectCountry = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "7%",
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
          Select your <Text style={{ color: "#4B9CD3" }}> Country</Text>{" "}
        </Text>
      </View>
      <SearchComponent data={data} placeholder="Search your country here ..." next="SelectYearGroup" multiSelect={false} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1e1e1e",
  },
});
export default SelectCountry;
