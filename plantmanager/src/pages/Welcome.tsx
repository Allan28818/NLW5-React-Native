import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import { Button } from "../components/Button";

export function Welcome() {
  8;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        as suas plantas {"\n"}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.img} />

      <Text style={styles.subtitle}>
        Não esqueça de regar suas plantas. Nós cuidamos de lembrar você sempre
        que precisar.
      </Text>

      <Button title=">" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  img: {
    width: 292,
    height: 284,
  },
});