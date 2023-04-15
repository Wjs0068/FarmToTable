import { StyleSheet, Text, View, Image, Linking } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

const data = [
  {
    id: 1,
    pic: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "WHO WE ARE",
    readMeLink: "#",
    description: "We're health-nuts, we are conscience of the food we eat.",
    linkWords: "Read Story",
  },
  {
    id: 2,
    pic: "https://images.unsplash.com/photo-1537721664796-76f77222a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "HOW WE WORK",
    readMeLink: "#",
    linkWords: "Read More",
    description:
      "We're helping consumers reach local farmers, for the best product.",
  },
  {
    id: 3,
    pic: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "WHERE TO FIND",
    readMeLink: "#",
    linkWords: "Shop Now",
    description:
      "We have local farmers all over the country who are looking to sell.",
  },
];

const WhoWeAre = () => {
  const [selected, setSelected] = useState(0);

  const handlePrevious = () => {
    if (selected === 0) {
      setSelected(2);
    } else {
      setSelected(selected - 1);
    }
  };

  const handleNext = () => {
    if (selected === 2) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_who_we_are}>
        <View style={styles.container_who_we_are_left}>
          <Image source={{ uri: data[selected].pic }} style={styles.image} />
          <View style={styles.buttonContainer}>
            <Button
              textColor="white"
              icon="arrow-left"
              style={{ flex: 1 }}
              onPress={handlePrevious}
            ></Button>
            <Text style={styles.pageNumber}>{selected + 1}/3</Text>
            <Button
              textColor="white"
              style={{ flex: 1 }}
              icon="arrow-right"
              onPress={handleNext}
            ></Button>
          </View>
        </View>
        <View style={styles.container_who_we_are_right}>
          <Text style={styles.title}>{data[selected].title}</Text>
          <Text style={styles.description}>{data[selected].description}</Text>
          <Text
            style={styles.linkWords}
            onPress={() => Linking.openURL(data[selected].readMeLink)}
          >
            {data[selected].link}
          </Text>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => Linking.openURL(data[selected].linkWords)}
          >
            {data[selected].linkWords}
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  container_who_we_are: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    columnGap: 20,
    padding: 10,
    margin: 10,
  },
  container_who_we_are_left: {
    marginTop: 35,
    flex: 1,
    justifyContent: "space-between",
    rowGap: 20,
    alignItems: "left",
  },
  container_who_we_are_right: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    // marginBottom: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
  },
  linkWords: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    padding: 5,
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "white",
  },
  button: {
    marginTop: 10,
    backgroundColor: "black",
  },
});

export default WhoWeAre;
