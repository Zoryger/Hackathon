import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useMeme } from "../hooks/useMeme";
import { Button } from "react-native";

export const MemesScreen = () => {
  const navigation = useNavigation<any>();
  const [number, setNumber] = React.useState(1);
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 75) + 1;
    setNumber(randomNumber);
  };
  function goBack() {
    navigation.goBack();
  }
  var { data, status } = useMeme();
  var url;
  var width;
  if (status === "loading") {
    <Text>Loading</Text>;
  }
  if (status === "error") {
    <Text>Error</Text>;
  }
  if (status == "success") {
    var url = data.data.memes[number].url;
    var width = data.data.memes[number].width;
    var height = data.data.memes[number].height;
  }

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View>
          <Appbar.Header>
            <Appbar.BackAction onPress={goBack} />
            <Appbar.Content title="Memes Generator" />
          </Appbar.Header>
          <View
            style={{
              padding: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button title="Get random Meme" onPress={() => getRandomNumber()} />
            <Image
              style={{
                marginTop: 25,
                width: width,
                height: height,
                maxWidth: 200,
                maxHeight: 400,
              }}
              source={{ uri: url }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};
