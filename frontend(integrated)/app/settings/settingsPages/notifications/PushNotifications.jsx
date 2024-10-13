import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Button,
  TouchableOpacity,
} from "react-native";

const PushNotificationSettings = () => {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [lessonReminder, setLessonReminder] = useState(false);
  const [goalReminder, setGoalReminder] = useState(true);
  const [reminderTime, setReminderTime] = useState("8:00 AM");

  const saveSettings = () => {
    // Logic to save notification settings
    alert("Notification settings saved.");
  };

  const toggleSwitch = (toggleFunction) => {
    toggleFunction((previousState) => !previousState);
  };

  const setReminder = () => {
    // Logic to set reminder time
    alert(`Reminder time set to ${reminderTime}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Push Notification Settings</Text>
      </View>

      <View style={styles.notificationSection}>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Daily Reminder</Text>
          <Switch
            value={dailyReminder}
            onValueChange={() => toggleSwitch(setDailyReminder)}
          />
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Lesson Reminder</Text>
          <Switch
            value={lessonReminder}
            onValueChange={() => toggleSwitch(setLessonReminder)}
          />
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Goal Reminder</Text>
          <Switch
            value={goalReminder}
            onValueChange={() => toggleSwitch(setGoalReminder)}
          />
        </View>
      </View>

      <View style={styles.reminderTimeSection}>
        <Text style={styles.reminderTimeText}>Set Daily Reminder Time:</Text>
        <TouchableOpacity onPress={setReminder}>
          <Text style={styles.reminderTimeButton}>Time: {reminderTime}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <Button title="Save Settings" onPress={saveSettings} />
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
  notificationSection: {
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  notificationText: {
    fontSize: 18,
    color: "#212121",
  },
  reminderTimeSection: {
    marginBottom: 20,
  },
  reminderTimeText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#212121",
  },
  reminderTimeButton: {
    fontSize: 16,
    color: "#4caf50",
    textDecorationLine: "underline",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PushNotificationSettings;
