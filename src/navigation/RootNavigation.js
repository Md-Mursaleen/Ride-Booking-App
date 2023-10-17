import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import TaxiRideScreen from "../screens/TaxiRideScreen";
import RentalsRideScreen from "../screens/RentalsRideScreen";
import RentalsGettingStartedScreen from "../screens/RentalsGettingStartedScreen";
import SearchScreen from "../screens/SearchScreen";
import RideScreen from "../screens/RideScreen";
import ProfileSettingScreen from "../screens/ProfileSettingScreen";
import IntercityRideScreen from "../screens/IntercityRideScreen";
import BikesRideScreen from "../screens/BikesRideScreen";
import TripsScreen from "../screens/TripsScreen";
import LoginScreen from "../screens/LoginScreen";
import GettingStartedScreen from "../screens/GettingStartedScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GettingStarted" >
                <Stack.Screen name="GettingStarted" component={GettingStartedScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="Intercity" component={IntercityRideScreen} />
                <Stack.Screen name="Bikes" component={BikesRideScreen} />
                <Stack.Screen name="Rentals" component={RentalsRideScreen} />
                <Stack.Screen name="RentalsGettingStarted" component={RentalsGettingStartedScreen} />
                <Stack.Screen name="Taxi" component={TaxiRideScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Ride" component={RideScreen} />
                <Stack.Screen name="Trips" component={TripsScreen} />
                <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;