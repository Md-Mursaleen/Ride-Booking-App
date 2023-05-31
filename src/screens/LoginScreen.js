import "expo-dev-client";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.textStyle}>Login out to remove your account</Text>
                <Image source={{ uri: "https://i.ibb.co/CsV9RYZ/login-image.png" }} style={styles.imageStyle} />
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => navigation.navigate("BottomTab")}>
                    <Text style={styles.buttonText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee"
    },
    subContainer: {
        marginTop: 40,
        marginHorizontal: 15
    },
    logoStyle: {
        height: 90,
        width: 95,
        resizeMode: "contain"
    },
    textStyle: {
        fontSize: 34,
        fontWeight: "500",
        color: "grey",
        opacity: 0.8
    },
    imageStyle: {
        height: 220,
        width: "100%",
        resizeMode: "contain"
    },
    buttonContainer: {
        marginTop: 25,
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    buttonText: {
        fontSize: 15.5,
        fontWeight: "500",
        color: "white"
    }
});