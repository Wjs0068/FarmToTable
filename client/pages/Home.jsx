import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategorySection from "../components/CategorySection"; // Import CategorySection component
import StoresList from "../components/StoresList"; // Import StoresList component

const Home = () => {
  // Dummy data for categories and stores
  const categories = [
    {
      category_id: 1,
      category_title: "Category 1",
      category_image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      category_id: 2,
      category_title: "Category 2",
      category_image: "https://example.com/category2.png",
    },
    {
      category_id: 3,
      category_title: "Category 3",
      category_image: "https://example.com/category2.png",
    },
    {
      category_id: 4,
      category_title: "Category 4",
      category_image: "https://example.com/category2.png",
    },
    {
      category_id: 5,
      category_title: "Category 5",
      category_image: "https://example.com/category2.png",
    },
    {
      category_id: 6,
      category_title: "Category 6",
      category_image: "https://example.com/category2.png",
    },
    {
      category_id: 7,
      category_title: "Category 7",
      category_image: "https://example.com/category2.png",
    },
    {
      category_id: 8,
      category_title: "Category 8",
      category_image: "https://example.com/category2.png",
    },
  ];

  const stores = [
    {
      store_id: 1,
      store_brand: "Store 1",
      store_image: "https://example.com/store1.png",
    },
    {
      store_id: 2,
      store_brand: "Store 2",
      store_image: "https://example.com/store2.png",
    },
    {
      store_id: 3,
      store_brand: "Store 3",
      store_image: "https://example.com/store2.png",
    },
    {
      store_id: 4,
      store_brand: "Store 4",
      store_image: "https://example.com/store2.png",
    },
    {
      store_id: 5,
      store_brand: "Store 5",
      store_image: "https://example.com/store2.png",
    },
    {
      store_id: 6,
      store_brand: "Store 6",
      store_image: "https://example.com/store2.png",
    },
    {
      store_id: 7,
      store_brand: "Store 7",
      store_image: "https://example.com/store2.png",
    },
    // Add more stores as needed
  ];

  return (
    <View style={styles.container}>
      {/* Render CategorySection component */}
      <CategorySection categories={categories} />

      {/* Render StoresList component */}
      <StoresList stores={stores} />

      {/* Other content of Home component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Home;
