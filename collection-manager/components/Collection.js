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
    <View>
      {/* <Text>Collection Page</Text> */}
      {collectionList.map((item) => (
        <Text>{item.title}</Text>
      ))}
    </View>
  );
};

export default Collection;
