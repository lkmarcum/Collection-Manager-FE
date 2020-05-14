import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Collection = ({ activeCollection }) => {
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://collection-manager-2020.herokuapp.com/collections/${activeCollection.media_type}/${activeCollection.id}`
      )
      .then((res) => {
        setCollectionList(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      {collectionList.map((item) => (
        <View style={styles.lineItem}>
          <Text style={styles.item}>{item.title}</Text>
          <Text style={styles.genre}>{item.genre}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "space-evenly",
    height: "100%",
    backgroundColor: "#212635",
    paddingTop: 20,
  },
  item: {
    color: "white",
    fontSize: 25,
  },
  genre: {
    color: "white",
    fontSize: 18,
  },
  lineItem: {
    marginBottom: 20,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    alignItems: "center",
  },
});

export default Collection;
