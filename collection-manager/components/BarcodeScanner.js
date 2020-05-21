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
  const [type, setType] = useState(Camera.Constants.Type.back);
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
    navigation.pop();
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View>
          <Text>Barcode scanned:</Text>
          <Text>{barcode}</Text>
          <TouchableOpacity style={styles.scanButton} onPress={submitBarcode}>
            <Text>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scanButton} onPress={scanAgain}>
            <Text>Scan again</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* <Camera style={{ flex: 1 }} type={type} onBarCodeScanned={barcodeScanned}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
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

        {/* {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )} */}
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
  },
});

export default BarcodeScanner;
