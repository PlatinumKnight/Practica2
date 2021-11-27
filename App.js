import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator1 from "./Navigations/StackNavigator1";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator1 />
    </NavigationContainer>
  );
}
