import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

const SearchComponent = ({ data, placeholder, next, multiSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [selectedData, setSelectedData] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const newData = data.filter((item) => {
        const itemData = item.toUpperCase();
        const queryData = query.toUpperCase();
        return itemData.indexOf(queryData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const handleSelectCountry = (country) => {
    if (multiSelect) {
      if (selectedData.includes(country)) {
        setSelectedData(
          selectedData.filter((item) => item !== country)
        );
      } else {
        setSelectedData([...selectedData, country]);
      }
    } else {
      setSelectedData([country]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#D1E5F4"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <EvilIcons name="search" size={24} color="#D1E5F4" />
        </View>
        <View style={styles.list}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.itemContainer,
                selectedData.includes(item) &&
                  styles.selectedItemContainer,
              ]}
              onPress={() => handleSelectCountry(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
              {selectedData.includes(item) && (
                <Feather name="check-square" size={24} color="white" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {selectedData.length > 0 && (
          <TouchableOpacity style={styles.button}>
            <Link href={{
              pathname:`pages/${next}`,
              params:{selectedData:JSON.stringify(selectedData)},
            }} style={styles.linkText}>
              Continue
            </Link>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D1E5F4",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#D1E5F4",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    minWidth: "30%",
    justifyContent: "space-between",
  },
  selectedItemContainer: {
    backgroundColor: "#4B9CD3", // Highlight color for selected item
  },
  itemText: {
    fontSize: 26,
    color: "white",
    marginRight: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    right: "2%",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 30,
    borderRadius: 10, 
    backgroundColor: "#4B9CD3",
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    color: "white",
    textAlign: "center",
    fontSize:20
  },
});

export default SearchComponent;
