import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const { height: winHeight, width: winWidth } = Dimensions.get("window");
let leftP = winWidth > winHeight ? 200 : 10;
let rightP = winWidth > winHeight ? 200 : 10;

const AccountSettings = () => {
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/150"
  );

  const [previousEmail, setPreviousEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");

  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isGoogleLinked, setGoogleLinked] = useState(true);
  const [isAppleLinked, setAppleLinked] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState("Active");

  const saveChanges = () => {
    alert("Changes saved successfully");
  };

  const deleteAccount = () => {
    alert("Account deleted");
  };

  const unlinkGoogle = () => {
    setGoogleLinked(false);
    alert("Google account unlinked");
  };

  const unlinkApple = () => {
    setAppleLinked(false);
    alert("Apple account unlinked");
  };

  const updateEmail = () => {
    // Add your email update logic here
    if (previousEmail && newEmail && emailPassword) {
      alert("Email updated successfully");
    } else {
      alert("Please fill out all fields");
    }
  };

  const updatePassword = () => {
    // Add your password update logic here
    if (previousPassword && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        alert("Password updated successfully");
      } else {
        alert("New passwords do not match");
      }
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Accounts Center</Text>

      {/* Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Picture</Text>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Change Picture")}
        >
          <Text style={styles.buttonText}>Change Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Email Update Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Update Email Address</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#888" />
          <TextInput
            style={styles.input}
            value={previousEmail}
            onChangeText={setPreviousEmail}
            keyboardType="email-address"
            placeholder="Previous Email"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#888" />
          <TextInput
            style={styles.input}
            value={newEmail}
            onChangeText={setNewEmail}
            keyboardType="email-address"
            placeholder="New Email"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#888" />
          <TextInput
            style={styles.input}
            value={emailPassword}
            onChangeText={setEmailPassword}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={updateEmail}>
          <Text style={styles.buttonText}>Update Email</Text>
        </TouchableOpacity>
      </View>

      {/* Password Update Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Update Password</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#888" />
          <TextInput
            style={styles.input}
            value={previousPassword}
            onChangeText={setPreviousPassword}
            secureTextEntry
            placeholder="Previous Password"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#888" />
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
            placeholder="New Password"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#888" />
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Confirm New Password"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={updatePassword}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>

      {/* Account Authorization Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Authorization</Text>
        <View style={styles.authOption}>
          <Text style={styles.authText}>Google</Text>
          {isGoogleLinked ? (
            <TouchableOpacity
              style={styles.unlinkButton}
              onPress={unlinkGoogle}
            >
              <Text style={styles.unlinkButtonText}>Unlink</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Google linked")}
            >
              <Text style={styles.buttonText}>Link Google</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.authOption}>
          <Text style={styles.authText}>Apple</Text>
          {isAppleLinked ? (
            <TouchableOpacity style={styles.unlinkButton} onPress={unlinkApple}>
              <Text style={styles.unlinkButtonText}>Unlink</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Apple linked")}
            >
              <Text style={styles.buttonText}>Link Apple</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Subscription Management */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subscription</Text>
        <Text style={styles.subscriptionText}>
          Current Status: {subscriptionStatus}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Subscription management")}
        >
          <Text style={styles.buttonText}>Manage Subscription</Text>
        </TouchableOpacity>
      </View>

      {/* Delete Account */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delete Account</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={deleteAccount}>
          <Text style={styles.deleteButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      {/* Save Changes Button */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: leftP,
    paddingRight: rightP,
    backgroundColor: "#0D1218", // Dark background color from the picture
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff", // Light text color to match the dark background
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#1E2630", // Slightly lighter background for sections
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#2C3540", // Dark input background
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    color: "#fff", // Light text color for inputs
  },
  authOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  authText: {
    fontSize: 18,
    color: "#fff",
  },
  button: {
    backgroundColor: "#5540E0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  unlinkButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  unlinkButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  subscriptionText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#f44336",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  actions: {
    marginTop: 30,
  },
  saveButton: {
    backgroundColor: "#5540E0",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AccountSettings;
