import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Sidebar from "../../components/SimpleSidebar";
import {
  PanGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Link } from "expo-router";

const PlanCard = ({ title, price, description, specialOffer, tag }) => {
  return (
    <View style={styles.planCard}>
      {tag && (
        <View style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      )}
      <Text style={styles.planTitle}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      {specialOffer && <Text style={styles.specialOffer}>{specialOffer}</Text>}
    </View>
  );
};

const PlanSelectionScreen = () => {
  const handleCardPress = (plan) => {
    console.log(`Plan selected: ${plan.title}`); // Implement your action here, like navigation or displaying details
  };

  const onSwipe = ({ nativeEvent }) => {
    if (
      nativeEvent.translationX < -50 &&
      nativeEvent.velocityX < -500 &&
      nativeEvent.state === State.ACTIVE
    ) {
      setSidebarVisible(false);
    }
  };

  const plans = [
    {
      title: "12 months",
      price: "£120",
      description: "£10/month",
      billcycle: "billed at £120/year",
      specialOffer: "50% of members choose this plan",
      tag: "Try 7 days trial for free",
    },
    {
      title: "3 months",
      price: "£120",
      description: "£10/month",
      billcycle: "billed at £120/year",
      offertag: "20% New Year Offer",
      specialOffer: "offer valid till 10th January",
      tag: "",
    },
    {
      title: "1 month",
      price: "£120",
      description: "£10/month",
      billcycle: "billed at £120/year",
      specialOffer: "",
      tag: "",
    },
  ];
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Sidebar Component, with toggleSidebar passed in */}
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        <Text style={styles.title}>Select the Plan</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {plans.map((plan, index) => (
            <View key={index} style={styles.planCard}>
              <Text style={styles.planTitle}>{plan.title}</Text>
              <Text style={styles.price}>{plan.price}</Text>
              <Text style={styles.description}>{plan.description}</Text>
              {plan.specialOffer && (
                <Text style={styles.specialOffer}>{plan.specialOffer}</Text>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center", // Centers content horizontally
    justifyContent: "center", // Centers content vertically
  },
  menuIcon: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50, // Adjust as necessary to position the title correctly
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 200,
    backgroundColor: "#333",
    zIndex: 5,
  },
  scrollViewContainer: {
    paddingHorizontal: 20, // Adds horizontal padding within the scroll view
    alignItems: "center", // Centers cards vertically in the scroll view
  },
  planCard: {
    backgroundColor: "#000",
    borderRadius: 0,
    padding: 15,
    height: 210,
    width: 210,
    marginHorizontal: 20,
    alignItems: "center",
    borderWidth: 0.4, // or any width you prefer
    borderColor: "#7B61FF",
  },
  planTitle: {
    fontSize: 20,
    color: "#FFF",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#7B61FF",
    marginBottom: 10,
  },

  billcycle: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 10,
  },

  offertag: {
    backgroundColor: "#4CAF50", // Green background
    color: "white", // White text color
    fontSize: 14,
    borderRadius: 10, // Rounded corners
    overflow: "hidden", // Ensures the background does not leak outside the border radius
    alignSelf: "center", // Center align within the card
    marginTop: 10, // Margin top for spacing
    fontWeight: "bold",
  },

  specialOffer: {
    fontSize: 14,
    color: "#4CAF50",
    marginTop: 10,
  },
  tag: {
    position: "absolute",
    top: -10,
    right: 30,
    backgroundColor: "#7B61FF",
    padding: 3,
    borderRadius: 0,
  },
  tagText: {
    color: "#FFF",
    fontWeight: "bold",
    width: 160,
  },
  navButton: {
    backgroundColor: "#222222",
    padding: 1,
    borderRadius: 1,
    marginTop: 20,
  },
  navButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default PlanSelectionScreen;
