import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import firebase from './configs/Firebase'
import HomeScreen from './screens/auths/HomeScreen'
import MapScreen from './screens/auths/MapScreen'
import UserProfileScreen from './screens/auths/UserProfileScreen'
import SignInScreen from './screens/unAuths/SignInScreen'
import SignUpScreen from './screens/unAuths/SignUpScreen'
import Avatar from './views/Avatar'

const Stack = createStackNavigator()

const Router = ({ }) => {
  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setAuth(true)
      } else {
        setAuth(false)
      }
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <View>
        <Text>{'Loading'}</Text>
      </View>
    )
  } else {
    return (
      <Stack.Navigator>
        {auth ? (
          // User is signed in
          <>
            <Stack.Screen
              name={'Map'}
              component={MapScreen}
              options={({ navigation }) => ({
                headerRightContainerStyle: {
                  marginRight: 10,
                },
                headerLeftContainerStyle: {
                  marginLeft: 10,
                },
                // headerTitle: props => <LogoTitle {...props} />,
                headerRight: () => (
                  <Avatar
                    uri={'https://i.ytimg.com/vi/uYwefisyGkY/maxresdefault.jpg'}
                    size={40}
                    onPress={() => {
                      navigation.navigate('UserProfile')
                    }}
                  />
                ),
              })}
            />
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'UserProfile'} component={UserProfileScreen} />
          </>
        ) : (
            <>
              <Stack.Screen
                name={'SignIn'}
                component={SignInScreen}
                options={{
                  title: '立即登入'
                }}
              />
              <Stack.Screen
                name={'SignUp'}
                component={SignUpScreen}
                options={{
                  title: '立即註冊',
                }}
              />
            </>
          )}
      </Stack.Navigator>
    )
  }
}

export default Router
