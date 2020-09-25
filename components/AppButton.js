import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

export default function AppButton(props) {
  return (
    <TouchableOpacity style={styles.counterBtn} onPress={props.countIncrementHandler}>
      <Text style={styles.counterBtnText}>Random Buttons</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  counterBtn:{
    marginTop: 10,
    padding: 15,
  },
  counterBtnText:{
    color: "#fed",
    fontSize: 25,
    textAlign: "center",
  },
});