import React, { useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default Profile;
