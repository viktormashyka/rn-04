import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const DefaultPostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params: ", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts: ", posts);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Login")}
        title="Log out"
        color="#fff"
      />
      <Text>DefaultPostsScreen!</Text>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Text>Here must be your photos</Text>
            <Image source={{ uri: item.photo }} style={styles.image} />
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Map")}>
        <Text style={styles.text}>Go to Map!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
        <Text style={styles.text}>Go to Comments!</Text>
      </TouchableOpacity>
      <Button title="go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="go to Comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 350, height: 200 },
});

export default DefaultPostsScreen;
