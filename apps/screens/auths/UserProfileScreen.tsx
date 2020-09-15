import React from "react";
import { Button, StyleSheet, View } from "react-native";
import firebase from "../../configs/Firebase";
import Avatar from "../../views/Avatar";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => { })
    .catch(error => console.log(error));
};


const pickImage = async () => {
  try {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        console.log("-----result.uri-----", result?.uri)
        // this.setState({ image: result.uri });
      }
      console.log(result);

    }


  } catch (E) {
    console.log(E);
  }
};

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Avatar uri={'https://i.ytimg.com/vi/uYwefisyGkY/maxresdefault.jpg'} size={60} onPress={pickImage} />
      <Button title="登出" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 20
  }
});

export default UserProfileScreen;
