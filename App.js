import "expo-dev-client";
import "react-native-gesture-handler";
import { StyleSheet, View, LogBox } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import RootNavigation from "./src/navigation/RootNavigation";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { Provider } from "react-redux";
import { store } from "./store";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
});
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

const customTheme = {
  ...AmplifyTheme,
  container: {
    ...AmplifyTheme.container,
    paddingTop: 20
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "#808080"
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: "#80808080"
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: "#808080"
  },
  sectionFooterLinkDisabled: {
    ...AmplifyTheme.sectionFooterLinkDisabled,
    color: "#80808080"
  }
};

const signUpConfig = {
  header: "Create a new account",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      placeholder: "Enter your name",
      required: true,
      displayOrder: 1,
      type: "string"
    },
    {
      label: "Email",
      key: "email",
      placeholder: "Enter your email",
      required: true,
      displayOrder: 2,
      type: "string"
    },
    {
      label: "Password",
      key: "password",
      placeholder: "Enter your password",
      required: true,
      displayOrder: 4,
      type: "password"
    }
  ]
};

export default withAuthenticator(App, { signUpConfig, theme: customTheme });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});