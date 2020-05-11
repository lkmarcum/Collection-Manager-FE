import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
} from "react-native";

const Login = ({ navigation, setActiveUser, activeUser }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleUsernameChange = (text) => {
    setUser({ ...user, username: text });
  };

  const handlePasswordChange = (text) => {
    setUser({ ...user, password: text });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Keyboard.dismiss();
    axios
      .post("https://collection-manager-2020.herokuapp.com/login", user)
      .then((res) => {
        console.log(`LOGIN res: ${res.data.token}`);
        if (res.data.token) {
          setActiveUser({ id: res.data.id, token: res.data.token });
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
});

export default Login;
