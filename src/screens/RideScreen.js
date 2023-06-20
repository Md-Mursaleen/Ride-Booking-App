import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "../../firebase";
import firebase from "../../firebase";
import "firebase/compat/firestore";
import RideMap from "../components/RideMap";
import Rides from "../components/Rides";

const RideScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { origin, destination, rentals } = route.params;
    const typeState = useState("");
    const onSubmit = async () => {
        const [type] = typeState;
        if (!type) {
            return;
        }
        try {
            const date = new Date();
            const trips = {
                type,
                createdAt: date.toISOString(),
                originLatitude: origin.details.geometry.location.lat,
                originLongitude: origin.details.geometry.location.lng,
                destinationLatitude: destination.details.geometry.location.lat,
                destinationLongitude: destination.details.geometry.location.lng,
                carId: "1"
            }
            db.collection("trips").add({
                trips: trips,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            Alert.alert(
                "Hey",
                "Your trip has been placed.",
                [{
                    text: "Go Home",
                    onPress: () => navigation.navigate("Home")
                }]
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            {!rentals ? (
                <View style={styles.mapStyle}>
                    <RideMap origin={origin} destination={destination} rentals={rentals} />
                </View>
            ) : (
                <View style={styles.mapStyle}>
                    <RideMap origin={origin} destination={destination} rentals={rentals} />
                </View>
            )}
            {!rentals ? (
                <View style={{ flex: 1 }}>
                    <Rides typeState={typeState} onSubmit={onSubmit} rentals={rentals} />
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <Rides typeState={typeState} onSubmit={onSubmit} rentals={rentals} />
                </View>
            )}
        </View>
    );
}

export default RideScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    mapStyle: {
        height: Dimensions.get("window").height - 420,
        borderBottomColor: "#eee",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    backButtonContainer: {
        position: "absolute",
        marginLeft: 15,
        marginTop: 45,
        width: 47,
        height: 47,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 50
    }
});