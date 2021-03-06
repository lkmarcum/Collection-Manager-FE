import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Collection from "./components/Collection";
import AddMovie from "./components/AddMovie";
import BarcodeScanner from "./components/BarcodeScanner";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App(props) {
  const Stack = createStackNavigator();
  const [activeUser, setActiveUser] = useState({ id: "", token: "" });
  const [activeCollection, setActiveCollection] = useState({
    id: "",
    title: "",
    media_type: "",
  });
  const [barcode, setBarcode] = useState("");

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
              title: "Your Collections",
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
              title: activeCollection.title,
            }}
          >
            {(props) => (
              <Collection {...props} activeCollection={activeCollection} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="AddMovie"
            options={{
              headerStyle: { backgroundColor: "#476C9B" },
              headerTintColor: "#fff",
              title: "Add Movie",
            }}
          >
            {(props) => (
              <AddMovie
                {...props}
                activeCollection={activeCollection}
                barcode={barcode}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Scanner"
            options={{
              headerStyle: { backgroundColor: "#476C9B" },
              headerTintColor: "#fff",
            }}
          >
            {(props) => (
              <BarcodeScanner
                {...props}
                setBarcode={setBarcode}
                barcode={barcode}
              />
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
