import Geolocation from "@react-native-community/geolocation";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native"
import MapView, { Marker, enableLatestRenderer } from "react-native-maps"

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  enableLatestRenderer();

  useEffect(() => {
    Geolocation.getCurrentPosition(responde => {
      setLatitude(responde.coords.latitude);
      setLongitude(responde.coords.longitude);
    }, erro => {
      console.error(`Não foi possivel obter localização: ${erro.message}`)
    }, {
      enableHighAccuracy: true,
      maximumAge: 0,
    })
  }, [])

  if(latitude === 0 ) {
    return <ActivityIndicator style={{flex:1}} />;
  }


  return (
    <View style={{flex: 1}}>
      <Text>Localização atual</Text>
      <Text>{latitude}, {longitude}</Text>
{/* Caso tenha a Chave-Key da api do google maps, precisa ser adicionado no android\app\src\main\AndroidManifest.xml
      <MapView
        style={{flex: 1}}
        provider="google"
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5
        }}
        >
          <Marker coordinate={{latitude, longitude}}/> 

        </MapView> */}
    </View>
  )
}
export default App; 