// © Allan Julie Fontes de Oliveira  - 2021
// Acesse o meu GitHub: https://github.com/Allan28818/NLW5-React-Native

import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
