import { Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const TaxiRideScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1680741891/assets/37/1a06c3-90ce-4d5d-9ee8-440dfd1e0231/original/Achieving-new-tier.jpg" }} style={styles.imageStyle} />
            <Pressable style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" />
            </Pressable>
            <Text style={styles.textStyle}>Uber Taxi</Text>
            <View style={{ marginTop: 20 }}>
                <View style={styles.descriptionContainer}>
                    <FontAwesome name="road" size={18} color="black" />
                    <View>
                        <Text style={styles.descriptionText}>For outstation trips to Agra, Chandigarh,</Text>
                        <Text style={styles.descriptionText}>Jaipur, Dehradun, Mathura and more</Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <MaterialCommunityIcons name="car-clock" size={18} color="black" />
                    <Text style={styles.descriptionText}>Book for now or reserve for later</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <MaterialCommunityIcons name="office-building-marker-outline" size={18} color="black" />
                    <Text style={styles.descriptionText}>Ideal for office and tourist travel</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate("Search", { showRide: true })}>
                <Text style={styles.buttonText}>Get started</Text>
                <MaterialCommunityIcons name="arrow-right" size={30} color="white" style={{ marginLeft: "auto" }} />
            </TouchableOpacity>
        </View>
    );
}

export default TaxiRideScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    imageStyle: {
        width: "100%",
        height: "32%"
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
    }
});