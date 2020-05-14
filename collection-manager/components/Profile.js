import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Directions } from "react-native-gesture-handler";

const Profile = ({ activeUser, setActiveCollection, navigation }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://collection-manager-2020.herokuapp.com/collections/${activeUser.id}`
      )
      .then((res) => {
        setCollections(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectCollection = (collection) => {
    setActiveCollection({
      id: collection.id,
      title: collection.title,
      media_type: collection.media_type,
    });
    navigation.navigate("Collection");
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Profile Page token: {activeUser.token}</Text> */}

      {collections.map((collection) => (
        <TouchableOpacity
          style={styles.collectionContainer}
          onPress={() => selectCollection(collection)}
        >
          <View style={styles.collection}>
            <Text style={styles.text}>{collection.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
    backgroundColor: "#212635",
  },
  collection: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    // marginTop: 40,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    paddingTop: 20,
  },
  collectionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 150,
    marginTop: 40,
  },
});

export default Profile;
