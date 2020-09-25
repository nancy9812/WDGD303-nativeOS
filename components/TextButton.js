import React from "react";
import {Alert, Text, TouchableOpacity, StyleSheet} from "react-native";

export default function AppButton() {
  return (
    <TouchableOpacity style={styles.textBtn} onPress={() => Alert.alert("Heh not this either 😎")} >
      <Text style={styles.textBtnText}>Button||||</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textBtn:{
    margin: 17,
    padding: 20,
  },
  textBtnText:{
    color: "skyblue",
    fontSize: 17,
    textAlign: "center",
  },
});