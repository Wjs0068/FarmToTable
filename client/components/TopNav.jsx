import * as React from "react";
import { Avatar, Drawer, List } from "react-native-paper";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { menuState } from "../atoms";

const TopNav = () => {
  const [active, setActive] = React.useState("");
  const [menu, setMenu] = useRecoilState(menuState);

  const handleSignOut = () => {
    // sign out functionality
  };

  const navigation = useNavigation();

  return (
    <Drawer.Section
      style={{
        display: menu ? "block" : "none",
        width: "100%",
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <List.Item
        title="User's Name"
        description="@username"
        left={() => (
          <Avatar.Image
            size={50}
            source={{
              uri: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80",
            }}
          />
        )}
      />
      <Drawer.Item
        label="Home"
        active={active === "item1"}
        onPress={() => {
          setMenu(false);
          setActive("item1");
          navigation.navigate("Home");
        }}
      />
      <Drawer.Item
        label="Products"
        active={active === "item2"}
        onPress={() => {
          setMenu(false);
          setActive("item2");
          navigation.navigate("Products");
        }}
      />
      <Drawer.Item
        label="Farmers"
        active={active === "item3"}
        onPress={() => {
          setMenu(false);
          setActive("item3");
          navigation.navigate("Farmers");
        }}
      />
      <Drawer.Item
        label="Markets"
        active={active === "item4"}
        onPress={() => {
          setMenu(false);
          setActive("item4");
          navigation.navigate("Markets");
        }}
      />
      <Drawer.Item
        label="Events"
        active={active === "item5"}
        onPress={() => {
          setMenu(false);
          setActive("item5");
          navigation.navigate("Events");
        }}
        style={{ borderBottomWidth: 0 }}
      />
      <Drawer.Section style={{ flex: 1, borderTopWidth: 1 }}>
        <Drawer.Item label="Sign Out" onPress={handleSignOut} />
      </Drawer.Section>
    </Drawer.Section>
  );
};

export default TopNav;
