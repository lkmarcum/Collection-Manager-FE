import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  ActivityIndicator,
} from "react-native";

const Login = ({ navigation, setActiveUser, activeUser }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (text) => {
    setUser({ ...user, username: text });
  };

  const handlePasswordChange = (text) => {
    setUser({ ...user, password: text });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Keyboard.dismiss();
    setLoading(true);
    axios
      .post("https://collection-manager-2020.herokuapp.com/login", user)
      .then((res) => {
        console.log(`LOGIN res: ${res.data.token}`);
        if (res.data.token) {
          console.log(`LOGIN id: ${res.data.id}`);
          setActiveUser({ id: res.data.id, token: res.data.token });
          setLoading(false);
          navigation.navigate("Profile");
        }
      })
      // .then(() => {
      //   navigation.navigate("Profile");
      // })
      .catch((err) => {
        console.log(`LOGIN err: ${err}`);
      });

    setUser({ username: "", password: "" });
  };

  // TODO - Add loading spinner/animation while login request waits for backend response

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Collection Manager</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Username"
        value={user.username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Password"
        value={user.password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={handleSubmit} />
      {loading && (
        <ActivityIndicator size="large" color="white" style={styles.spinner} />
      )}
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
    backgroundColor: "#212635",
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
  spinner: {
    marginTop: 20,
  },
});

export default Login;
