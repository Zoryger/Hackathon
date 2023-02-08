import React from "react";
import { SafeAreaView, Text } from "react-native";

import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "../components/WeatherCard";

export const MeteoScreen = (route: {
  params: { latitude: any; longitude: any };
}) => {
  const { latitude, longitude } = route.params;
  const { data, status } = useWeather();

  if (status === "loading") {
    return <Text>Loading</Text>;
  }

  if (status === "error") {
    return <Text>Error!</Text>;
  }
  return (
    <SafeAreaView>
      <WeatherCard data={data} />
    </SafeAreaView>
  );
};
