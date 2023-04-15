import { StyleSheet, Text, View, ScrollView, Animated } from "react-native";
import React, { useEffect } from "react";

import TopNav from "./TopNav";
import AppBar from "./AppBar";

const AppBarContainer = () => {
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    const handleScroll = (event) => {
      // Do something with event.nativeEvent.contentOffset.y
      console.log(event.nativeEvent.contentOffset.y);
    };

    const scrollListener = scrollY.addListener(handleScroll);

    return () => {
      scrollY.removeListener(scrollListener);
    };
  }, [scrollY]);

  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true, listener: (event) => handleScroll(event) } // Call handleScroll with event object
      )}
    >
      <AppBar />
      <TopNav />
    </ScrollView>
  );
};

export default AppBarContainer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    transform: [{ translateY: 0 }],
    zIndex: 1,
    backgroundColor: "transparent",
    width: "100%",
  },
});
