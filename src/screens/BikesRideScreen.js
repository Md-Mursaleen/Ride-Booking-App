import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const BikesRideScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://blogapi.uber.com/wp-content/uploads/2021/12/Screen-Shot-2021-12-22-at-14.56.52.png" }} style={styles.imageStyle} />
            <Pressable style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" />
            </Pressable>
            <Text style={styles.textStyle}>Uber Bikes</Text>
            <View style={{ marginTop: 20 }}>
                <View style={styles.descriptionContainer}>
                    <MaterialCommunityIcons name="door-sliding" size={18} color="black" />
                    <View>
                        <Text style={styles.descriptionTextStyle}>Affordable bike rides at your doorstep</Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <MaterialIcons name="directions-bike" size={18} color="black" />
                    <Text style={styles.descriptionTextStyle}>Book for now or reserve for later</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <FontAwesome5 name="route" size={18} color="black" />
                    <Text style={styles.descriptionTextStyle}>Ideal for short trips</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Search", { showRide: true })}>
                <Text style={styles.buttonTextStyle}>Get started</Text>
                <MaterialCommunityIcons name="arrow-right" size={30} color="white" style={{ marginLeft: "auto" }} />
            </TouchableOpacity>
        </View>
    );
}

export default BikesRideScreen;

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
    descriptionTextStyle: {
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
    buttonTextStyle: {
        marginLeft: 125,
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    }
});