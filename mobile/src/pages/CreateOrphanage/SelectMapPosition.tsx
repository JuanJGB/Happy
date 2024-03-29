import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { MapEvent, Marker } from "react-native-maps";

import mapMarkerImg from "../../images/map-marker.png";

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  function handleNextStep() {
    navigation.navigate("OrphanageData", { position });
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -28.687754,
          longitude: -49.3819755,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
        style={styles.mapStyle}
      >
        {!!position.latitude && (
          <Marker icon={mapMarkerImg} coordinate={position} />
        )}
      </MapView>
      {!!position.longitude && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, position: "relative" },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  nextButton: {
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 40,
  },
  nextButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: "#FFF",
  },
});
