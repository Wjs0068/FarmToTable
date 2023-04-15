import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>1000+ LOCAL FARMERS IN ONE PLACE</Text>
      <Text style={styles.textBottom}>
        Local Produced Product From Farmers We Love
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore Local Farmers</Text>
        <Text style={styles.buttonIcon}>▶</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  textTop: {
    color: "grey",
    fontSize: 14,
    opacity: 0.9,
    textAlign: "center",
    marginBottom: 10,
  },
  textBottom: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    marginRight: 10,
  },
  buttonIcon: {
    color: "black",
    fontSize: 18,
  },
});

export default Explore;
