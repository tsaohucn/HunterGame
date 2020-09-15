import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";

interface AvatarProps {
  uri: string;
  size?: number;
  onPress?: () => any;
}

const Avatar = ({ uri, size = 20, onPress }: AvatarProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size }} />
    </TouchableWithoutFeedback>
  )
}

export default Avatar