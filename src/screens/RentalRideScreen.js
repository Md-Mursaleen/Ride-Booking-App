import { Dimensions, StyleSheet, View, Pressable } from "react-native";
import React, { useState } from "react";
import RentalRideMap from "../components/RentalRideMap";
import { useNavigation, useRoute } from "@react-navigation/native";
import RentalRides from "../components/RentalRides";
import Ionicons from "react-native-vector-icons/Ionicons";

const RentalRideScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const typeState = useState("GoRentals");
    const { origin } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.mapStyle}>
                <RentalRideMap origin={origin} />
            </View>
            <Pressable style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" />
            </Pressable>
            <View style={{ flex: 1 }}>
                <RentalRides typeState={typeState} />
            </View>
        </View>
    );
}

export default RentalRideScreen;

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