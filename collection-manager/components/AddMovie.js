import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { RNCamera } from "react-native-camera";

const AddMovie = ({ activeCollection }) => {
  // const onBarcodeRead = (e) => {
  //   alert(`Barcode value is ${e.data}, barcode type is ${e.type}`);
  // };

  return (
    <View style={styles.container}>
      <Text>Add Movie</Text>
      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanText}>Scan barcode</Text>
      </TouchableOpacity>
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
  // preview: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
});

export default AddMovie;
