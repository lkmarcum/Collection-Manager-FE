import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Collection Manager</Text>
      <TextInput style={styles.inputs} placeholder="Username" />
      <TextInput style={styles.inputs} placeholder="Password" />
      <Button title="Sign In" />
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inputs: {
    backgroundColor: "white",
    color: "black",
    width: 200,
    marginBottom: 20,
    height: 40,
    borderRadius: 3,
    padding: 5,
  },
});

export default Login;
