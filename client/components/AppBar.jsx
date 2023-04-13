import React, { useState } from "react";
import { Appbar, IconButton, Searchbar } from "react-native-paper";
import { useRecoilState } from "recoil";
import { menuState } from "../atoms";

const AppBar = () => {
  const [open, setOpen] = useRecoilState(menuState);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleMenuPress = () => {
    setOpen(!open);
  };

  const handleSearchPress = () => {
    setSearchVisible(true);
  };

  const handleSearchBarCancel = () => {
    setSearchVisible(false);
    setSearchQuery("");
  };

  const handleSearchBarSubmit = () => {
    // Handle search bar submission
    console.log("Search submitted with query:", searchQuery);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <Appbar.Header style={{ backgroundColor: 'transparent'}}>
      {isSearchVisible ? (
        <IconButton
          icon="arrow-left"
          color="white"
          onPress={handleSearchBarCancel}
        />
      ) : (
        <Appbar.Action color="white" icon="menu" onPress={handleMenuPress} />
      )}

      <Appbar.Content
        color="white"
        title={isSearchVisible ? "" : "FarmToTable"}
        style={{ flex: isSearchVisible ? 0 : 1 }}
      />

      {isSearchVisible ? (
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
          onSubmitEditing={handleSearchBarSubmit}
          style={{ flex: 1 }}
        />
      ) : (
        <Appbar.Action
          color="white"
          icon="magnify"
          onPress={handleSearchPress}
        />
      )}
    </Appbar.Header>
  );
};

export default AppBar;
