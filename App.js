import "expo-dev-client";
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet, View, LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store";
import * as NavigationBar from "expo-navigation-bar";
import RootNavigation from "./src/navigation/RootNavigation";

LogBox.ignoreAllLogs();

function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
  }, []);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigation />
        <StatusBar style="auto" backgroundColor="transparent" />
      </View>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});