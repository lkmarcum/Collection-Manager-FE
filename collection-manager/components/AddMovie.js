import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Picker,
  Image,
} from "react-native";
import BarcodeScanner from "./BarcodeScanner";
// import { RNCamera } from "react-native-camera";

const AddMovie = ({ activeCollection, barcode, navigation }) => {
  const [showCamera, setShowCamera] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    genre: "",
    cast: "",
    director: "",
    plot: "",
    poster: "",
    ratings: [],
  });

  useEffect(() => {
    if (barcode !== "") {
      axios
        .get(`https://api.upcitemdb.com/prod/trial/lookup?upc=${barcode}`)
        .then((res) => {
          setMovieTitle(
            res.data.items[0].title.split(/[[(]/, 1)[0].slice(0, -1)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [barcode]);

  const searchTitle = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?apikey=c0db7475&t=${movieTitle}`)
      .then((res) => {
        setMovie({
          title: res.data.Title,
          year: res.data.Year,
          genre: res.data.Genre,
          cast: res.data.Actors,
          director: res.data.Director,
          plot: res.data.Plot,
          poster: res.data.Poster,
          ratings: res.data.Ratings,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openScanner = () => {
    navigation.navigate("Scanner");
  };

  const handleTitleChange = (text) => {
    setMovieTitle(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.scanButton} onPress={openScanner}>
        <Text style={styles.scanText}>Scan barcode</Text>
      </TouchableOpacity>
      <Text style={styles.scanText}>{barcode}</Text>
      {/* <Text style={styles.scanText}>{movieTitle}</Text> */}
      <TextInput
        style={styles.inputs}
        placeholder="Movie title"
        value={movieTitle}
        onChangeText={handleTitleChange}
      />
      <Button title="Search" onPress={searchTitle} />

      <View>
        <Image style={styles.image} source={{ uri: movie.poster }} />
        <Text style={styles.scanText}>{movie.title}</Text>
        <Text style={styles.scanText}>{movie.year}</Text>
        <Text style={styles.scanText}>{movie.genre}</Text>
        <Text style={styles.scanText}>{movie.cast}</Text>
        <Text style={styles.scanText}>{movie.director}</Text>
        <Text style={styles.scanText}>{movie.plot}</Text>
        {movie.ratings.map((rating) => (
          <Text style={styles.scanText} key={rating.Source}>
            {rating.Source}: {rating.Value}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#212635",
    paddingTop: 20,
    alignItems: "center",
  },
  scanText: {
    color: "white",
  },
  scanButton: {
    backgroundColor: "#3B84E6",
    padding: 10,
    borderRadius: 5,
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
  picker: {
    backgroundColor: "white",
    color: "black",
    width: 200,
    marginBottom: 20,
    height: 40,
    borderRadius: 3,
    padding: 5,
  },
  image: {
    height: 180,
    width: 120,
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

export default AddMovie;
