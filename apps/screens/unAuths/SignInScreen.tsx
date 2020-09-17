import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import firebase from '../../configs/Firebase'
import { scale } from '../../tools'
import Button from '../../views/Button'

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
