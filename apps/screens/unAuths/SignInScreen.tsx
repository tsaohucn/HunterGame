import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import firebase from "../../configs/Firebase";

const SignInScreen = () => {
  const [account, onChangeAccount] = useState('test@gmail.com');
  const [password, onChangePassword] = useState('123456');

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(account, password)
      .then(() => { })
      .catch((error) => alert(error));
  };

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(account, password)
      .then(() => { })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={'test@gmail.com'}
        style={styles.textInput}
        onChangeText={(text) => onChangeAccount(text)}
        value={account}
      />
      <TextInput
        defaultValue={'123456'}
        style={styles.textInput}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
      />
      <Button title="註冊" onPress={handleSignUp} />
      <Button title="登入" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textInput: {
    width: 100,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default SignInScreen;
