import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const RentalsRideScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1681484528/assets/1f/8da917-59a4-452a-8bc0-148f4a48c0f5/original/img_1.png" }} style={styles.imageStyle} />
            <Pressable style={styles.backButtonContainer}
                onPress={() => navigation.goBack()} >
                <Ionicons name="arrow-back-sharp" size={28} color="black" />
            </Pressable>
            <Text style={styles.textStyle}>Uber Rentals</Text>
            <View style={{ marginTop: 20 }}>
                <View style={styles.descriptionContainer}>
                    <MaterialCommunityIcons name="timer-sand" size={18} color="black" />
                    <Text style={styles.descriptionText}>Keep a car and driver for up to 12 hours</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <MaterialIcons name="work" size={18} color="black" />
                    <View>
                        <Text style={styles.descriptionText}>Ideal for business meetings, tourist travel</Text>
                        <Text style={styles.descriptionText}>and multiple stop trips</Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <MaterialCommunityIcons name="car-clock" size={18} color="black" />
                    <Text style={styles.descriptionText}>Book for now or reserve for later</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate("RentalsGettingStarted")}>
                <Text style={styles.buttonText}>Get started</Text>
                <MaterialCommunityIcons name="arrow-right" size={30} color="white" style={{ marginLeft: "auto" }} />
            </TouchableOpacity>
        </View>
    );
}

export default RentalsRideScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    imageStyle: {
        width: "100%",
        height: "32%"
    },
    backButtonContainer: {
        position: "absolute",
        marginLeft: 15,
        marginTop: 35,
        width: 47,
        height: 47,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 50
    },
    textStyle: {
        marginTop: 15,
        marginLeft: 25,
        fontSize: 48,
        fontWeight: "bold"
    },
    descriptionContainer: {
        marginHorizontal: 25,
        marginVertical: 13,
        flexDirection: "row",
        alignItems: "center"
    },
    descriptionText: {
        marginLeft: 22,
        fontSize: 16,
        fontWeight: "500"
    },
    buttonContainer: {
        padding: 12,
        marginTop: "auto",
        marginHorizontal: 15,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 7.5
    },
    buttonText: {
        marginLeft: 125,
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    }
});