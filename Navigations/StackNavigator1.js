import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";

const Stack = createStackNavigator();

export default function StackNavigator1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "Clima",
          headerStyle: {
            backgroundColor: "#808080",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      />

      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.titulo,
        })}
      />
    </Stack.Navigator>
  );
}
