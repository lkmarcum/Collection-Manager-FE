import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Collection from "./components/Collection";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App(props) {
  const Stack = createStackNavigator();
  const [activeUser, setActiveUser] = useState({ id: "", token: "" });
  const [activeCollection, setActiveCollection] = useState();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{
              headerStyle: { backgroundColor: "#476C9B" },
              headerTintColor: "#fff",
            }}
          >
            {(props) => (
              <Login
                {...props}
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Profile"
            options={{
              headerStyle: { backgroundColor: "#476C9B" },
              headerTintColor: "#fff",
            }}
          >
            {(props) => (
              <Profile
                {...props}
                activeUser={activeUser}
                setActiveCollection={setActiveCollection}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Collection"
            options={{
              headerStyle: { backgroundColor: "#476C9B" },
              headerTintColor: "#fff",
            }}
          >
            {(props) => (
              <Collection {...props} activeCollection={activeCollection} />
            )}
          </Stack.Screen>
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
