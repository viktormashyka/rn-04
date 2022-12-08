import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const PostsScreen = ({ route }) => {
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
      <TouchableOpacity
        onPress={
          () => alert("press Go to Map")
          // navigation.navigate("Registration", {
          //   sessionId: 45,
          //   userId: "22e25",
          // })
        }
      >
        <Text style={styles.text}>Go to Map!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={
          () => alert("press Go to Comments")
          // navigation.navigate("Registration", {
          //   sessionId: 45,
          //   userId: "22e25",
          // })
        }
      >
        <Text style={styles.text}>Go to Comments!</Text>
      </TouchableOpacity>
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

export default PostsScreen;
