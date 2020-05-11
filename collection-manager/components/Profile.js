import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";

const Profile = ({ activeUser }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Page token: {activeUser.token}</Text>
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
    backgroundColor: "#212635",
  },
});

export default Profile;
