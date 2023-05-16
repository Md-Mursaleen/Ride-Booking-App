import { StyleSheet, View, Dimensions, ScrollView, Image } from "react-native";
import React from "react";
import HomeMap from "../components/HomeMap";
import HomeMessage from "../components/HomeMessage";
import HomeSearch from "../components/HomeSearch";
import HomeCategories from "../components/HomeCategories";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mapStyle}>
                <HomeMap latitudeDelta={0.0022} longitudeDelta={0.0021} />
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: "https://i.ibb.co/ZMhy8ws/uber-logo.png" }} style={styles.imageStyle} />
            </View>
            <HomeMessage />
            <ScrollView>
                <HomeCategories />
                <View style={{ marginTop: 10 }}>
                    <HomeSearch />
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    mapStyle: {
        height: Dimensions.get("window").height - 538
    },
    imageContainer: {
        position: "absolute",
        marginLeft: 15,
        marginTop: 15
    },
    imageStyle: {
        height: 75,
        width: 80,
        resizeMode: "contain"
    },
});