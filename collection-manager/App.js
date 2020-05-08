import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: { backgroundColor: "#476C9B" },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerStyle: { backgroundColor: "#476C9B" },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
