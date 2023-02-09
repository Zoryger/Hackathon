import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { useImage } from "../hooks/useImage";

interface Props {}

export const WeatherCard = ({ data }: any) => {
  const { latitude, longitude, elevation, current_weather } = data;
  return (
    <Card style={styles.item}>
      <Card.Title
        style={styles.title}
        title={"Météo au coordonées:"}
        titleStyle={styles.title2}
        subtitle={"Latitude: " + latitude + " / Longitude: " + longitude}
        subtitleStyle={styles.coordonées}
      />
      <Card.Cover source={useImage(current_weather.weathercode)} />
      <Card.Content style={styles.item}>
        <Text style={styles.coordonées}>
          Elevation = {elevation} m {"\n"}Temperature ={" "}
          {current_weather.temperature} °C {"\n"}Windspeed ={" "}
          {current_weather.windspeed} km/h {"\n"}Time = {current_weather.time}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#87CEEB",
  },
  title: {
    backgroundColor: "#FA6E2A",
    marginBottom: 15,
    borderRadius: 20,
  },
  title2: {
    fontSize: 25,
  },
  coordonées: {
    fontSize: 15,
    textAlign: "center",
  },
});
