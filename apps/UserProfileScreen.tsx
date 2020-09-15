import React from "react";
import { StyleSheet, View, Button } from "react-native";
import firebase from "../../configs/Firebase";

const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {})
    .catch(error => console.log(error));
};

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="登出" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default UserProfileScreen;
