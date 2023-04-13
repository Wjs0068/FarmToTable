import React from "react";
import { ScrollView, View } from "react-native";
import { Card, Title } from "react-native-paper";

const CategorySection = ({ categories }) => {
  return (
    <View style={{ height: "30%", marginBottom: 10 }}>
      <Title style={{ marginLeft: 16 }}>Categories</Title>
      <ScrollView style={{ height: "30%" }} horizontal>
        {categories.map((category) => (
          <Card key={category.category_id} style={{ marginRight: 10 }}>
            <Card.Cover
              source={{ uri: category.category_image }}
              style={{ width: 150, height: 60 }}
            />
            <Card.Content>
              <Title>{category.category_title}</Title>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategorySection;
