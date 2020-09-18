import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import firebase from '../../configs/Firebase'
import { scale } from '../../tools'
import Button from '../../views/Button'
import * as Facebook from 'expo-facebook';

interface FaceBookResult {
  declinedPermissions: any[];
  expires: number;
  permissions: string[];
  token: string;
  type: string;
}


const SignInScreen = ({ navigation }: any) => {
  const [account, onChangeAccount] = useState('test@gmail.com')
  const [password, onChangePassword] = useState('123456')

  // const handleSignUp = () => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(account, password)
  //     .then(() => { })
  //     .catch((error) => alert(error))
  // }

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(account, password)
      .then(() => { })
      .catch((error) => alert(error))
  }

  const facebook = async () => {
    try {
      await Facebook.initializeAsync('<APP_ID>');
      const facebookResult = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      const {
        declinedPermissions, // []
        expires,
        permissions,
        token,
        type
      } = facebookResult as FaceBookResult
      console.log("------facebookResult------", facebookResult)
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const responseString = await response?.json()
        console.log("---------response id --------", responseString?.id)
        console.log("---------response name--------", responseString?.name)

        // alert('Logged in!');
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  const facebookB = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(facebookProvider).then((result) => {
      console.log("-------result-----", result)
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

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
      <Button
        title={'登入'}
        onPress={signIn}
        containerStyle={styles.signButton}
      />
      <Button
        title={'立即註冊'}
        onPress={() => {
          navigation?.navigate('SignUp')
        }}
        containerStyle={styles.signButton}
      />
      <Button
        title={'臉書'}
        onPress={facebook}
        containerStyle={styles.signButton}
      />
      <Button
        title={'臉書B'}
        onPress={facebookB}
        containerStyle={styles.signButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  textInput: {
    width: '100%',
    aspectRatio: 10,
    borderColor: '#d9d9d9',
    borderWidth: scale(1),
    borderRadius: scale(5),
    paddingHorizontal: scale(10),
    marginTop: scale(50),
  },
  signButton: {
    width: '100%',
    aspectRatio: 8,
    borderRadius: scale(10),
    marginTop: scale(50),
  },
})

export default SignInScreen
