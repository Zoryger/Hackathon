import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { MeteoScreen } from "../screens/MeteoScreen";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen name={Routes.METEO} component={MeteoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
