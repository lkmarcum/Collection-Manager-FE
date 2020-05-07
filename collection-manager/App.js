import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Routes from "./components/Routes";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Profile /> */}
      {/* <NativeRouter>
        <Routes />
      </NativeRouter> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212635",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
