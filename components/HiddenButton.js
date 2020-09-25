import React from "react";
import {  Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HiddenButton(props) {
  return (
    <TouchableOpacity onPress={props.countReset} >
      <Text style={styles.hiddenBtnText}>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  hiddenBtnText: {
    color: "#223",
    marginBottom: 28,
  },
});