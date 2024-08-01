import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from 'react-native-safe-area-context';


const header = () => {
  return (
    <View style={styles.headerMain}>
      <SafeAreaView>
        <FontAwesome
          name="user-circle"
          size={40}
          color="white"
          style={{
            position: "relative",
            left: "83%",
            top: 15,
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            position: "absolute",
            left: "95%",
            top: 11,
          }}
        >
          Username
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            position: "absolute",
            left: "95%",
            top: 35,
          }}
        >
          Tutor
        </Text>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  headerMain: {
    backgroundColor: "#111111",
    height: 70,
    borderRadius: 15,
  },
});

export default header

