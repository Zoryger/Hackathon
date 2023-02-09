import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, Card, Button } from "react-native-paper";
import React, { useState } from "react";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

export default function App() {
  const navigation = useNavigation<any>();
  const [longi, setlong] = useState("");
  const [lati, setlat] = useState("");
  const navigationToMeteo = (lati: string, longi: string) => {
    navigation.navigate(Routes.METEO, {
      latitude: lati,
      longitude: longi,
    });
  };
  const navigationToMemes = () => {
    navigation.navigate(Routes.Memes_SCREEN);
  };

  const image = require("../../assets/weather/cloud.jpg");
  return (
    <View style={styles.container}>
      <Text style={styles.White}>HelloMétéo</Text>
      <ImageBackground source={image} style={styles.image}>
        <Card style={styles.Card}>
          <TextInput
            style={styles.Element}
            label="Latitude"
            placeholder="50.951163"
            onChangeText={(value) => setlat(value)}
          />
          <TextInput
            style={styles.Element}
            label="Longitude"
            placeholder="1.883421"
            onChangeText={(value) => setlong(value)}
          />
          <Button
            style={styles.Button}
            mode="contained"
            onPress={() => navigationToMeteo(lati, longi)}
          >
            Météo
          </Button>
        </Card>
      </ImageBackground>
      <TouchableOpacity style={styles.White} onPress={navigationToMemes}>
        <Text>Memes Generator.</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  Element: {
    margin: 10,
    borderRadius: 5,
    width: 200,
  },
  Button: {
    margin: 10,
    borderRadius: 5,
    width: 200,
    backgroundColor: "#87CEEB",
  },
  White: {
    color: "#333333",
    margin: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 23,
  },
  Card: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    borderRadius: 5,
    alignItems: "center",
  },
});
