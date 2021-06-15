// © Allan Julie Fontes de Oliveira  - 2021
// Acesse o meu GitHub: https://github.com/Allan28818/NLW5-React-Native

import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

import loadAniamtion from "../assets/load.json";

export function Load() {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAniamtion}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    backgroundColor: "transparent",
    width: 200,
    height: 200,
  },
});
