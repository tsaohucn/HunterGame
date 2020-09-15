import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import HomeScreen from "./apps/HomeScreen";
import MapScreen from "./apps/MapScreen";
import SignInScreen from "./apps/signs/SignInScreen";
import firebase from "./configs/Firebase";

const Stack = createStackNavigator();

const Router = () => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setAuth(true);
      } else {
        setAuth(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View>
        <Text>{"Loading"}</Text>
      </View>
    );
  } else {
    return (
      <Stack.Navigator>
        {auth ? (
          // User is signed in
          <>
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
            // options={{
            //   title: "Sign in",
            //   // When logging out, a pop animation feels intuitive
            //   // You can remove this if you want the default 'push' animation
            //   animationTypeForReplace: state.isSignout ? "pop" : "push",
            // }}
            />
          )}
      </Stack.Navigator>
    );
  }
};

export default Router;
