import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

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
    const NavigationtoRide = () => {
        if (origin) {
            navigation.navigate("Rental", { origin });
        }
    };
    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={26} color="#141414" style={styles.iconStyle} onPress={() => navigation.goBack()} />
            <Text style={styles.titleStyle}>How much time do you need?</Text>
            <View style={styles.timeContainer}>
                <Pressable style={[styles.timeIconContainer, quantity > 1 ? { backgroundColor: "#eee" } : { backgroundColor: "#f6f6f6" }]}
                    onPress={() => { if (quantity > 1) { setQuantity(quantity - 1) } }}>
                    <Entypo name="minus" size={25} style={quantity > 1 ? { color: "black" } : { color: "grey" }} />
                </Pressable>
                <Text style={styles.timeTextStyle}>{quantity} hour</Text>
                <Pressable style={styles.timeIconContainer}
                    onPress={() => setQuantity(quantity + 1)}>
                    <Entypo name="plus" size={25} color="black" />
                </Pressable>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitleText}>Starting at</Text>
                    <View >
                        <Text style={styles.priceText}>${getTotal()}</Text>
                        <Text style={styles.priceSubText}>$3.64/hour</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={NavigationtoRide}>
                    <Text style={styles.buttonText}>Choose a ride</Text>
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
    titleStyle: {
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
        fontSize: 35,
        fontWeight: "600"
    },
    bottomContainer: {
        marginTop: "auto",
        borderTopWidth: 2,
        borderTopColor: "#f6f6f6"
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
    buttonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    priceContainer: {
        marginTop: 10,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    priceTitleText: {
        marginLeft: 15,
        fontSize: 19,
        fontWeight: "500"
    },
    priceText: {
        marginRight: 10,
        fontSize: 17.5,
        fontWeight: "500"
    },
    priceSubText: {
        marginRight: 10,
        marginTop: 5,
        fontSize: 14.5,
        color: "#7a7a7a"
    }
});