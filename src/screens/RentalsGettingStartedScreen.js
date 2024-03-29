import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const RentalsGettingStartedScreen = () => {
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    const getTotal = () => {
        return (3.64 * quantity).toFixed(2);
    };
    const origin = {
        lat: 28.53352,
        lng: 77.210886
    };
    const destination = {
        lat: 28.519185,
        lng: 77.213005
    };
    const NavigationtoRide = () => {
        if (origin) {
            navigation.navigate("Ride", { origin, destination, rentals: true });
        }
    };
    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={26} color="#141414" style={styles.iconStyle} onPress={() => navigation.goBack()} />
            <Text style={styles.titleTextStyle}>How much time do you need?</Text>
            <View style={styles.timeContainer}>
                <Pressable style={[styles.timeIconContainer, quantity > 1 ? { backgroundColor: "#eee" } : { backgroundColor: "#f6f6f6" }]} onPress={() => { if (quantity > 1) { setQuantity(quantity - 1) } }}>
                    <Entypo name="minus" size={25} style={quantity > 1 ? { color: "black" } : { color: "grey" }} />
                </Pressable>
                <Text style={styles.timeTextStyle}>{quantity} hour</Text>
                <Pressable style={styles.timeIconContainer} onPress={() => setQuantity(quantity + 1)}>
                    <Entypo name="plus" size={25} color="black" />
                </Pressable>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitleTextStyle}>Starting at</Text>
                    <View >
                        <Text style={[styles.priceTextStyle, getTotal() > 10 && { marginLeft: 20 }]}>${getTotal()}</Text>
                        <Text style={styles.priceSubTextStyle}>$3.64/hour</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={NavigationtoRide}>
                    <Text style={styles.buttonTextStyle}>Choose a ride</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RentalsGettingStartedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    iconStyle: {
        marginLeft: 15,
        marginTop: 85
    },
    titleTextStyle: {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 29.5,
        fontWeight: "600"
    },
    timeContainer: {
        marginTop: 45,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    timeIconContainer: {
        marginHorizontal: 60,
        width: 42,
        height: 42,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        borderRadius: 50
    },
    timeTextStyle: {
        fontSize: 40,
        fontWeight: "bold"
    },
    bottomContainer: {
        marginTop: "auto",
        borderTopWidth: 2,
        borderTopColor: "#f6f6f6"
    },
    priceContainer: {
        marginTop: 10,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    priceTitleTextStyle: {
        marginLeft: 15,
        fontSize: 19,
        fontWeight: "500"
    },
    priceTextStyle: {
        marginLeft: 28,
        fontSize: 18,
        fontWeight: "500"
    },
    priceSubTextStyle: {
        marginRight: 10,
        marginTop: 5,
        fontSize: 15,
        color: "#5d5d5d"
    },
    buttonContainer: {
        padding: 15,
        marginHorizontal: 16,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 7.5
    },
    buttonTextStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    }
});