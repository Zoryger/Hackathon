import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "../components/WeatherCard";
import { useNavigation } from "@react-navigation/native";

export const MeteoScreen = (route: any) => {
  const navigation = useNavigation<any>();
  function goBack() {
    navigation.goBack();
  }
  const latitude = "";
  const longitude = "";
  // const { latitude, longitude } = route.params;
  console.log(route.params);

  if (latitude === "") {
    var { data, status } = useWeather("41.919229", "8.738635");
  } else {
    var { data, status } = useWeather(latitude, longitude);
  }
  if (status === "loading") {
    return <Text>Loading</Text>;
  }

  if (status === "error") {
    return <Text>Error!</Text>;
  } else {
    return (
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.BackAction onPress={goBack} />
          <Appbar.Content title="HelloMétéo" />
        </Appbar.Header>
        <WeatherCard data={data} />
      </SafeAreaView>
    );
  }
};
