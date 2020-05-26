import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
// import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

const BarcodeScanner = ({ setBarcode, barcode, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const barcodeScanned = (e) => {
    setScanned(true);
    setBarcode(e.data);
    // navigation.pop();

    setModalVisible(true);
  };

  const scanAgain = () => {
    setModalVisible(false);
    setScanned(false);
  };

  const submitBarcode = () => {
    setModalVisible(false);
    navigation.pop();
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Barcode scanned:</Text>
          <Text style={styles.modalText}>{barcode}</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.scanButton} onPress={submitBarcode}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scanButton} onPress={scanAgain}>
              <Text style={styles.buttonText}>Scan again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : barcodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
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
  text: {
    color: "white",
  },
  scanButton: {
    backgroundColor: "#3B84E6",
    padding: 10,
    borderRadius: 5,
    width: 90,
    alignItems: "center",
  },
  modal: {
    height: "35%",
    marginTop: "50%",
    alignItems: "center",
    backgroundColor: "#212635",
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    paddingTop: 35,
  },
  modalText: {
    color: "white",
    fontSize: 30,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
  },
});

export default BarcodeScanner;
