import React from "react";
import axios from "axios";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const AddMovie = ({ activeCollection }) => {
  return (
    <View style={styles.container}>
      <Text>Add Movie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#212635",
    paddingTop: 20,
  },
});

export default AddMovie;
