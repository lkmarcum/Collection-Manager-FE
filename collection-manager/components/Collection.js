import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  AsyncStorage,
} from "react-native";

const Collection = ({ activeCollection, navigation }) => {
  const [collectionList, setCollectionList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://collection-manager-2020.herokuapp.com/collections/${activeCollection.media_type}/${activeCollection.id}`
  //     )
  //     .then((res) => {
  //       setCollectionList(res.data.items);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    AsyncStorage.getItem("myMovieCollection", (err, result) => {
      // console.log(JSON.parse(result));
      if (result) {
        const newResult = JSON.parse(result);
        setCollectionList(newResult.collection);
      }
    });
  }, []);

  const clickAdd = () => {
    if (activeCollection.media_type === "movies") {
      navigation.navigate("AddMovie");
    }
  };

  const myMovies = {
    collection: [
      { title: "Movie 1", genre: "Genre 1" },
      { title: "Movie 2", genre: "Genre 2" },
    ],
  };

  const setMovies = () => {
    AsyncStorage.setItem("myMovieCollection", JSON.stringify(myMovies), () => {
      AsyncStorage.getItem("myMovieCollection", (err, result) => {
        // console.log(JSON.parse(result));
        const newResult = JSON.parse(result);
        setCollectionList(newResult.collection);
      });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={clickAdd}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={setMovies}>
            &#10003;
          </Text>
        </TouchableOpacity>
      </View>
      {collectionList.map((item) => (
        <View style={styles.lineItem} key={item.title}>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  button: {
    width: 50,
    backgroundColor: "#3B84E6",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    color: "white",
  },
  plusText: {
    fontSize: 60,
    color: "white",
    paddingBottom: 5,
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
