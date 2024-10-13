import React, { useState, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";
import Header from "./../../components/Header";
import SearchComponent from "./../../components/SearchComponent";
import { useLocalSearchParams } from "expo-router";

const SelectSubject = () => {
  const selectedData = useLocalSearchParams();
  const options = Object.values(selectedData);
  const [selectedLabel, setSelectedLabel] = useState(options[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    Animated.timing(animation, {
      toValue: dropdownVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const selectOption = (option) => {
    setSelectedLabel(option);
    toggleDropdown();
  };

  const dropdownTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
    extrapolate: "clamp",
  });

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

  return (
    <View style={styles.container}>
      <Header link="./../settings/RootSettings" />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Select your subject for{" "}
            <TouchableOpacity onPress={toggleDropdown}>
              <Text style={{ color: "#263eff", fontSize: 23 }}>
                {selectedLabel}
              </Text>
            </TouchableOpacity>
          </Text>
          {dropdownVisible && (
            <Animated.View
              style={[
                styles.dropdown,
                { transform: [{ translateY: dropdownTranslateY }] },
              ]}
            >
              {options.map(
                (option, index) =>
                  option !== selectedLabel && (
                    <TouchableOpacity
                      key={index}
                      onPress={() => selectOption(option)}
                    >
                      <Text style={styles.option}>{option}</Text>
                    </TouchableOpacity>
                  )
              )}
            </Animated.View>
          )}
          <Text style={styles.infoText}>You can select one or more</Text>
        </View>
        <SearchComponent
          data={data}
          placeholder="Search your Subject here..."
          next="PlanSelectionScreen"
          multiSelect={true}
          modal={true}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "3%",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  infoText: {
    color: "white",
    fontSize: 20,
  },
  dropdown: {
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 2,
    width: 150,
    position: "absolute",
    top: 40,
    zIndex: 1,
  },
  option: {
    padding: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default SelectSubject;
