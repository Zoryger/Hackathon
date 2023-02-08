import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { MeteoScreen } from "../screens/MeteoScreen";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name={Routes.METEO} component={MeteoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
