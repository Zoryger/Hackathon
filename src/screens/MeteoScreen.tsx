import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card } from "react-native-paper";
import { useImage } from "../hooks/useImage";
import ContentLoader from "react-content-loader";

// import { default as data2 } from "../../api/data.json";
import { usemeteo } from "../hooks/useMeteo";

const Item = ({
  lat,
  long,
  elevation,
  temperature,
  windspeed,
  time,
  weathercode,
}: any) => {
  return (
    <Card style={styles.item}>
      <Card.Title
        style={styles.title}
        title={"Météo au coordonées:"}
        titleStyle={styles.title2}
        subtitle={"Lat: " + lat + " / Long: " + long}
        subtitleStyle={styles.coordonées}
      />
      <Card.Cover source={useImage(weathercode)} />
      <Card.Content style={styles.item}>
        lat = {lat} long = {long} elevation = {elevation} temperature ={" "}
        {temperature} windspeed = {windspeed} time = {time}
      </Card.Content>
    </Card>
  );
};

export const MeteoScreen = () => {
  const { data, status } = usemeteo();
  const renderItem = ({ item }: any) => (
    <Item
      lat={item.latitude}
      long={item.longitude}
      elevation={item.elevation}
      temperature={item.current_weather.temperature}
      windspeed={item.current_weather.windspeed}
      time={item.current_weather.time}
      weathercode={item.current_weather.weathercode}
    />
  );

  if (status === "loading") {
    return <ContentLoader></ContentLoader>;
  }

  if (status === "error") {
    return <Text>Error!</Text>;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
