import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { useImage } from "../hooks/useImage";

interface Props {}

export const WeatherCard = ({ data }: any) => {
  const {
    latitude,
    long,
    elevation,
    temperature,
    windspeed,
    time,
    weathercode,
  } = data;
  return (
    <Card style={styles.item}>
      <Card.Title
        style={styles.title}
        title={"Météo au coordonées:"}
        titleStyle={styles.title2}
        subtitle={"Lat: " + latitude + " / Long: " + long}
        subtitleStyle={styles.coordonées}
      />
      <Card.Cover source={useImage(weathercode)} />
      <Card.Content style={styles.item}>
        <Text>
          lat = {latitude} long = {long} elevation = {elevation} temperature ={" "}
          {temperature} windspeed = {windspeed} time = {time}
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
    fontSize: 17,
    textAlign: "center",
  },
});
