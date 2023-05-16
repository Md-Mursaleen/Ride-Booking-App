import { Dimensions, StyleSheet, View, Alert, Pressable } from "react-native";
import React, { useState } from "react";
import RideMap from "../components/RideMap";
import { useNavigation, useRoute } from "@react-navigation/native";
import Rides from "../components/Rides";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createOrder } from "../graphql/mutations";
import Ionicons from "react-native-vector-icons/Ionicons";

const RideScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const typeState = useState("UberX");
    const { origin, destination } = route.params;
    const onSubmit = async () => {
        const [type] = typeState;
        if (!type) {
            return;
        }
        try {
            const date = new Date();
            const userInfo = await Auth.currentAuthenticatedUser();
            const input = {
                type,
                createdAt: date.toISOString(),
                originLatitude: origin.details.geometry.location.lat,
                originLongitude: origin.details.geometry.location.lng,
                destinationLatitude: destination.details.geometry.location.lat,
                destinationLongitude: destination.details.geometry.location.lng,
                userId: userInfo.attributes.sub,
                carId: "1"
            }
            const response = await API.graphql(graphqlOperation(createOrder, { input: input }));
            console.log(response);
            Alert.alert(
                "Hey",
                "Your order has been placed.",
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
            <View style={styles.mapStyle}>
                <RideMap origin={origin} destination={destination} />
            </View>
            <Pressable style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" />
            </Pressable>
            <View style={{ flex: 1 }}>
                <Rides typeState={typeState} onSubmit={onSubmit} />
            </View>
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