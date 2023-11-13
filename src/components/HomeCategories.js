import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const cars = {
    ride: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_126,h_126/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png",
    shuttle: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_956,h_537/v1665215989/assets/be/725b1a-de31-4b31-aea5-b5b70ab17e82/original/16_9.png",
    intercity: "https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png",
    rentals: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1029,h_579/f_auto,q_auto/products/carousel/Black.png",
    bikes: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1029,h_579/f_auto,q_auto/products/carousel/Moto.png",
    taxi: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_854,h_481/f_auto,q_auto/products/carousel/Taxi_Yellow.png"
};

const HomeCategories = () => {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 15 }}>
            <View style={styles.topRowStyle}>
                <TouchableOpacity style={[styles.topRowContainer, { marginLeft: 15 }]} onPress={() => navigation.navigate("Search", { showRide: false })}>
                    <Image source={{ uri: cars["ride"] }} style={styles.topRowImageStyle} />
                    <Text style={styles.topRowTextStyle}>Ride</Text>
                </TouchableOpacity>
                <View style={[styles.topRowContainer, { marginRight: 15 }]}>
                    <Image source={{ uri: cars["shuttle"] }} style={[styles.topRowImageStyle, { marginBottom: -13, marginTop: -5, height: 68, width: 70 }]} />
                    <Text style={styles.topRowTextStyle}>Shuttle</Text>
                </View>
            </View>
            <View style={styles.bottomRowStyle}>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={[styles.bottomRowContainer, { marginLeft: 12 }]} onPress={() => navigation.navigate("Rentals")}>
                        <Image source={{ uri: cars["rentals"] }} style={[styles.bottomRowImageStyle, { marginLeft: 15, marginBottom: 13, height: 57 }]} />
                    </TouchableOpacity>
                    <Text style={styles.bottomRowTextStyle}>Rentals</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.bottomRowContainer} onPress={() => navigation.navigate("Intercity")}>
                        <Image source={{ uri: cars["intercity"] }} style={[styles.bottomRowImageStyle, { marginLeft: 15, marginBottom: 13, height: 57.5 }]} />
                    </TouchableOpacity>
                    <Text style={styles.bottomRowTextStyle}>Intercity</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.bottomRowContainer} onPress={() => navigation.navigate("Bikes")}>
                        <Image source={{ uri: cars["bikes"] }} style={[styles.bottomRowImageStyle, { height: 68, width: 75, marginLeft: 30, marginBottom: 15 }]} />
                    </TouchableOpacity>
                    <Text style={styles.bottomRowTextStyle}>Bikes</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={[styles.bottomRowContainer, { marginRight: 12 }]} onPress={() => navigation.navigate("Taxi")}>
                        <Image source={{ uri: cars["taxi"] }} style={[styles.bottomRowImageStyle, { height: 60, marginLeft: 15, marginBottom: 15 }]} />
                    </TouchableOpacity>
                    <Text style={styles.bottomRowTextStyle}>Taxi</Text>
                </View>
            </View>
        </View>
    );
}

export default HomeCategories;

const styles = StyleSheet.create({
    topRowStyle: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowContainer: {
        width: 175,
        height: 90,
        padding: 8,
        marginTop: 8,
        backgroundColor: "#f2f2f2",
        borderRadius: 10
    },
    topRowImageStyle: {
        marginLeft: "auto",
        width: 68,
        height: 48
    },
    topRowTextStyle: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 16,
        fontWeight: "500"
    },
    bottomRowStyle: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomRowContainer: {
        width: 85,
        height: 70,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    bottomRowImageStyle: {
        width: 68,
        height: 50
    },
    bottomRowTextStyle: {
        marginTop: 5,
        fontSize: 12.5,
        fontWeight: "500"
    }
});