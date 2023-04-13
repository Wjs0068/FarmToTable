import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppBarContainer from "./components/AppBarContainer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Farmers from "./pages/Farmers";
import Markets from "./pages/Markets";
import Events from "./pages/Events";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <RecoilRoot>
          <View style={styles.container}>
            <StatusBar hidden={true} />
            {/* <AppBarContainer /> */}

            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerLeft: null, headerShown: false }}
              />
              <Stack.Screen
                name="Products"
                component={Products}
                options={{ headerLeft: null, headerShown: false }}
              />
              <Stack.Screen
                name="Farmers"
                component={Farmers}
                options={{ headerLeft: null, headerShown: false }}
              />
              <Stack.Screen
                name="Markets"
                component={Markets}
                options={{ headerLeft: null, headerShown: false }}
              />
              <Stack.Screen
                name="Events"
                component={Events}
                options={{ headerLeft: null, headerShown: false }}
              />
            </Stack.Navigator>
          </View>
        </RecoilRoot>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
