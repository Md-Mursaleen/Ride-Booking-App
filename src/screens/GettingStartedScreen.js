import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const GettingStartedScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://i.ibb.co/ZMhy8ws/uber-logo.png" }} style={styles.logoStyle} />
            <Image source={require("../../assets/images/start-image.png")} style={styles.imageStyle} />
            <Text style={styles.subTitleTextStyle}>Move with Safety</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonTextStyle}>Get Started</Text>
                <MaterialCommunityIcons name="arrow-right" size={30} color="white" style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    );
};

export default GettingStartedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#286ef0"
    },
    logoStyle: {
        marginTop: 70,
        height: 90,
        width: 95,
        alignSelf: "center",
        resizeMode: "contain"
    },
    imageStyle: {
        height: 270,
        width: "100%",
        alignSelf: "center"
    },
    subTitleTextStyle: {
        marginTop: 25,
        fontSize: 36,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    buttonContainer: {
        marginTop: "auto",
        marginBottom: 30,
        width: "95%",
        height: 53,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "black"
    },
    buttonTextStyle: {
        marginLeft: 145,
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    iconStyle: {
        marginLeft: "auto",
        marginRight: 10
    }
});
