import { StyleSheet, Text, View } from "react-native";
import React from "react";

import TopNav from "./TopNav";
import AppBar from "./AppBar";

const index = () => {
  return (
    <View>
      <AppBar />
      <TopNav />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
