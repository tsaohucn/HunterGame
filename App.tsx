import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import Router from './apps/Router'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}
