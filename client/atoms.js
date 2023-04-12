import { atom } from "recoil";

export const menuState = atom({
  key: "unique-menu-state-key", // ensure the key is unique
  default: false,
});
