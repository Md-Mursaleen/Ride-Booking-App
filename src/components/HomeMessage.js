import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Travel only if neccessary</Text>
            <Text style={styles.descriptionStyle}>Help flatten the curve.If you must travel, please exercise caution for your safety and the safety of our community.</Text>
            <Text style={styles.linkStyle}>Learn more</Text>
        </View>
    );
}

export default HomeMessage;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#1065e9",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    titleStyle: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    descriptionStyle: {
        marginBottom: 10,
        fontSize: 15,
        color: "#bed9ff"
    },
    linkStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textDecorationLine: "underline"
    }
});