import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  // const [errorMsg, setErrorMsg] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude: ", location.coords.latitude);
    console.log("longitude: ", location.coords.longitude);
    setPhoto(photo.uri);
    console.log("camera: ", photo.uri);
  };

  const sendPhoto = () => {
    console.log("navigation: ", navigation);
    navigation.navigate("DefaultPosts", { photo });
  };

  // useEffect(() => {
  //   // Location.requestPermissionsAsync() // deprecated
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     console.log("status: ", status);
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       console.log("errorMsg: ", errorMsg);
  //       return;
  //     }
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image style={styles.image} source={{ uri: photo }} />
          </View>
        )}
        <TouchableOpacity
          style={styles.snapContainer}
          onPress={() => {
            takePhoto;
          }}
        >
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => {
            sendPhoto;
          }}
        >
          <Text style={styles.sendLabel}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "70%",
    // flex: 1,
    marginHorizontal: 2,
    marginTop: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: { color: "#fff" },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#20b2aa",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: { color: "#20b2aa", fontSize: 20 },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },

  image: {
    height: 200,
    width: 200,
  },
});

export default CreatePostsScreen;
