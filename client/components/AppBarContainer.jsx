import { StyleSheet, Text, View } from "react-native";
import React from "react";

import TopNav from "./TopNav";
import AppBar from "./AppBar";

const index = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <TopNav />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    zIndex: "20",
    color: 'white'
  }
});
