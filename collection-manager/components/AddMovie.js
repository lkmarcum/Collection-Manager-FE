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
} from "react-native";
import BarcodeScanner from "./BarcodeScanner";
// import { RNCamera } from "react-native-camera";

const AddMovie = ({ activeCollection, barcode, navigation }) => {
  const [showCamera, setShowCamera] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [genre, setGenre] = useState("");

  // const onBarcodeRead = (e) => {
  //   alert(`Barcode value is ${e.data}, barcode type is ${e.type}`);
  // };

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
      <Text>{barcode}</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Title"
        value={movieTitle}
        onChangeText={handleTitleChange}
      />
      <Picker
        selectedValue={genre}
        onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Action" value="Action" />
        <Picker.Item label="Comedy" value="Comedy" />
        <Picker.Item label="Drama" value="Drama" />
        <Picker.Item label="Romance" value="Romance" />
        <Picker.Item label="Sci-Fi" value="Sci-Fi" />
        <Picker.Item label="Sports" value="Sports" />
        <Picker.Item label="Thriller" value="Thriller" />
      </Picker>
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
});

export default AddMovie;
