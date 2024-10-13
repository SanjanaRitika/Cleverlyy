import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Bangla", "Hindi", "Spanish", "French"];

  const saveLanguage = () => {
    // Logic to save selected language
    alert(`Language set to ${selectedLanguage}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Language Settings</Text>
      </View>

      <View style={styles.languageList}>
        {languages.map((language, index) => (
          <TouchableOpacity
            key={index}
            style={styles.languageItem}
            onPress={() => setSelectedLanguage(language)}
          >
            <Text style={styles.languageText}>{language}</Text>
            {selectedLanguage === language && (
              <Text style={styles.selectedMark}>✔</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.actions}>
        <Button title="Save" onPress={saveLanguage} />
        <Button
          title="Cancel"
          onPress={() => alert("Changes discarded")}
          color="#f44336"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196f3",
  },
  languageList: {
    marginBottom: 20,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  languageText: {
    fontSize: 18,
    color: "#212121",
  },
  selectedMark: {
    fontSize: 18,
    color: "#4caf50",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LanguageSettings;
