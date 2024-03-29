import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export default function OrphanageDetails() {
  const [mapReady, setMapReady] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          <Image
            style={styles.image}
            source={{
              uri: "https://fmnova.com.br/images/noticias/safe_image.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://fmnova.com.br/images/noticias/safe_image.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://fmnova.com.br/images/noticias/safe_image.jpg",
            }}
          />
        </ScrollView>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Orf. Esperança</Text>
        <Text style={styles.description}>Teste de descrição de orfanato</Text>
        <View style={styles.mapContainer}>
          {mapReady && (
            <MapView
              onMapReady={() => setMapReady(true)}
              initialRegion={{
                latitude: -28.687754,
                longitude: -49.3819755,
                longitudeDelta: 0.008,
                latitudeDelta: 0.008,
              }}
              zoomEnabled={false}
              pitchEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
            >
              <Marker
                coordinate={{
                  latitude: -28.687754,
                  longitude: -49.3819755,
                }}
              />
            </MapView>
          )}
          <View style={styles.separator} />
          <Text style={styles.title}>Instruções para visita</Text>
          <Text style={styles.description}>Teste de descrição</Text>
          <View style={styles.scheduleContainer}>
            <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
              <Feather name="clock" size={40} color="#2AB5D1" />
              <Text style={[styles.scheduleText, styles.scheduleTextBlue]} />
            </View>
            <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
              <Feather name="clock" size={40} color="#39CC83" />
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]} />
            </View>
          </View>
          <RectButton style={styles.contactButton} onPress={() => {}}>
            <FontAwesome name="whatsapp" size={24} color="#FFF" />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imagesContainer: { height: 240 },
  image: {
    width: Dimensions.get("window").width,
    height: 240,
    resizeMode: "cover",
  },
  detailsContainer: { padding: 24 },
  title: { color: "#4D6F80", fontSize: 30, fontFamily: "Nunito_700Bold" },
  description: {
    fontFamily: "Nunito_600SemiBold",
    color: "#5c8599",
    lineHeight: 24,
    marginTop: 16,
  },
  mapContainer: { padding: 16, alignItems: "center", justifyContent: "center" },
  routesText: { fontFamily: "Nunito_700Bold", color: "#0089a5" },
  separator: {
    height: 0.8,
    width: "100%",
    backgroundColor: "#d3e2e6",
    marginVertical: 40,
  },
  scheduleContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scheduleItem: { width: "48%", padding: 20 },
  scheduleItemBlue: {
    backgroundColor: "#e6f7fb",
    borderWidth: 1,
    borderColor: "#B3dae2",
    borderRadius: 20,
  },
  scheduleItemGreen: {
    backgroundColor: "#edfff6",
    borderWidth: 1,
    borderColor: "#a1e9c5",
    borderRadius: 20,
  },
  scheduleText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },
  scheduleTextBlue: {
    color: "#5c8599",
  },
  scheduleTextGreen: {
    color: "#37c77f",
  },
  contactButton: {
    backgroundColor: "#3cdc8c",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 49,
  },
  contactButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
  },
});
