import React from "react";
import SearchScreen from "../screens/SearchScreen";
import RideScreen from "../screens/RideScreen";
import ProfileSettingScreen from "../screens/ProfileSettingScreen";
import IntercityRideScreen from "../screens/IntercityRideScreen";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import TaxiRideScreen from "../screens/TaxiRideScreen";
import RentalsRideScreen from "../screens/RentalsRideScreen";
import RentalRideScreen from "../screens/RentalRideScreen";
import RentalsGettingStartedScreen from "../screens/RentalsGettingStartedScreen";
import BikesRideScreen from "../screens/BikesRideScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="BottomTab" component={BottomNavigation} />
                <Stack.Screen name="Intercity" component={IntercityRideScreen} />
                <Stack.Screen name="Bikes" component={BikesRideScreen} />
                <Stack.Screen name="Rentals" component={RentalsRideScreen} />
                <Stack.Screen name="Rental" component={RentalRideScreen} />
                <Stack.Screen name="RentalsGettingStarted" component={RentalsGettingStartedScreen} />
                <Stack.Screen name="Taxi" component={TaxiRideScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Ride" component={RideScreen} />
                <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;