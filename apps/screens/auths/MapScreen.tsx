import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Avatar from '../../views/Avatar'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import firebase, { geostore } from '../../configs/Firebase'
import { UidContext } from '../../Store'

const MapScreen = () => {
  const [latitude, setLatitude] = useState<number>(37.78825) // 緯度
  const [longitude, setＬongitude] = useState<number>(-122.4324) // 經度

  const { uid } = useContext(UidContext)
  const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      alert('Permission to access location was denied')
    } else {
      const { coords } = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = coords
      setLatitude(latitude)
      setＬongitude(longitude)
    }
  }

  useEffect(() => {
    getLocation()

    geostore
      .collection('positions')
      .doc('user1')
      .set({
        coordinates: new firebase.firestore.GeoPoint(40.7589, -73.9851),
      })
  }, [])

  console.log('--------uid-------', uid)
  return (
    <MapView
      // provider={'google'}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onRegionChangeComplete={({ latitude, longitude }) => {
        // console.log('-------latitude-------', latitude)
        // console.log('-------longitude-------', longitude)
      }}>
      {latitude && longitude && (
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}>
          <Avatar uri={'https://i.ytimg.com/vi/uYwefisyGkY/maxresdefault.jpg'} size={60} />
        </Marker>
      )}
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MapScreen
