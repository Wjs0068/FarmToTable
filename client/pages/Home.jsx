import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppBarContainer from "../components/AppBarContainer";
import { LinearGradient } from "expo-linear-gradient";
import Explore from "../components/Explore";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: "100%", zIndex: 0, flex: 1 }}>
        <AppBarContainer />

        <ImageBackground
          style={styles.container}
          source={{
            uri: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
        >
          <LinearGradient
            style={styles.linearGradient}
            colors={["#000000"]}
          ></LinearGradient>
          <Explore />
        </ImageBackground>
      </View>

      <WhoWeAre />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 700,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
    zIndex: 5,
    position: "absolute",
  },
});

export default Home;
