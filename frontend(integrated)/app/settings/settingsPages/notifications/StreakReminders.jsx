import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ProgressBarAndroid,
  TouchableOpacity,
} from "react-native";

const StreakReminder = () => {
  const [streak, setStreak] = useState(10); // Current streak
  const [reminderTime, setReminderTime] = useState("8:00 PM");

  const updateStreak = () => {
    // Logic to update streak
    setStreak(streak + 1);
  };

  const setReminder = () => {
    // Logic to set reminder time
    alert(`Reminder set for ${reminderTime}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.streakText}>🔥 {streak}-Day Streak!</Text>
        <Text style={styles.motivationText}>Keep it going!</Text>
      </View>

      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={streak / 30} // Assuming 30 days goal
        color="#4caf50"
        style={styles.progressBar}
      />

      <View style={styles.reminderSection}>
        <Text style={styles.reminderText}>
          Set a reminder to maintain your streak:
        </Text>
        <TouchableOpacity onPress={setReminder}>
          <Text style={styles.reminderButton}>
            Set Reminder: {reminderTime}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <Button title="Update Streak" onPress={updateStreak} />
        <Button
          title="Dismiss Reminder"
          onPress={() => setReminderTime("")}
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
  streakText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff5722",
  },
  motivationText: {
    fontSize: 18,
    color: "#757575",
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  reminderSection: {
    marginBottom: 20,
  },
  reminderText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#212121",
  },
  reminderButton: {
    fontSize: 16,
    color: "#4caf50",
    textDecorationLine: "underline",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default StreakReminder;
