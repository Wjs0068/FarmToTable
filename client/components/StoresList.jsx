import React from "react";
import { View } from "react-native";
import { Avatar, Card, Title } from "react-native-paper";

const StoresList = ({ stores }) => {
  return (
    <View>
      <Title>Stores</Title>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {stores.map((store) => (
          <Card key={store.store_id} style={{ width: "48%", marginBottom: 10 }}>
            <Card.Title
              title={store.store_brand}
              left={(props) => (
                <Avatar.Image size={40} source={{ uri: store.store_image }} />
              )}
            />
          </Card>
        ))}
      </View>
    </View>
  );
};

export default StoresList;
