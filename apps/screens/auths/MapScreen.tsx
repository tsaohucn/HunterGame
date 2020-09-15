import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Avatar from "../../views/Avatar";

const MapScreen = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
      }}>
        <Avatar uri={'https://i.ytimg.com/vi/uYwefisyGkY/maxresdefault.jpg'} size={60} />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default MapScreen;
