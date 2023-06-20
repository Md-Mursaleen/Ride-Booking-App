import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const LocationRow = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={data.description === "Home" ? { ...styles.iconContainer, backgroundColor: "#1065e9" } : styles.iconContainer}>
                {data.description === "Home" ? <Entypo name="home" size={20} color="white" /> : <Entypo name="location-pin" size={20} color="white" />}
            </View>
            <Text>{data.description || data.vicinity}</Text>
        </View>
    );
}

export default LocationRow;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        padding: 5,
        marginRight: 15,
        backgroundColor: "#a2a2a2",
        borderRadius: 50
    }
});