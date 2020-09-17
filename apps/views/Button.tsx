import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native'

interface Button {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: () => any;
}

const Button = ({ title, containerStyle, titleStyle, onPress }: Button) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={['#51ba97', '#37bef0']}
        style={[styles.container, containerStyle]}
      >
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#ffffff',
  },
})

export default Button
