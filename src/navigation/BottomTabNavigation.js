import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "darkgrey"
        }} initialRouteName="Home">
            <BottomTab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ size, color }) => (<Foundation name="home" size={size} color={color} />), tabBarLabelStyle: { ...styles.textStyle } }} />
            <BottomTab.Screen name="Account" component={ProfileScreen} options={{ tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="account" size={size} color={color} />), tabBarLabelStyle: { ...styles.textStyle } }} />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigation;

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 11,
        fontWeight: "500"
    }
});