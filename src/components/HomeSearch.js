import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.searchContainer}
                onPress={() => navigation.navigate("Search", { showRide: false })}>
                <Text style={styles.searchText}>Where to?</Text>
                <View style={styles.searchIconContainer}>
                    <AntDesign name={"clockcircle"} size={16} color="#535353" />
                    <Text>Now</Text>
                    <MaterialIcons name={"keyboard-arrow-down"} size={16} />
                </View>
            </TouchableOpacity>
            <View style={[styles.locationRow, { borderBottomWidth: 1, borderBottomColor: "#dbdbdb" }]}>
                <View style={styles.locationIconContainer}>
                    <AntDesign name={"clockcircle"} size={20} color="white" />
                </View>
                <Text style={styles.locationText}>New Delhi</Text>
            </View>
            <View style={styles.locationRow}>
                <View style={[styles.locationIconContainer, { backgroundColor: "#1065e9" }]}>
                    <Entypo name={"home"} size={20} color="white" />
                </View>
                <Text style={styles.locationText}>Home</Text>
            </View>
        </View>
    );
}

export default HomeSearch;

const styles = StyleSheet.create({
    searchContainer: {
        padding: 10,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eee"
    },
    searchText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#111"
    },
    searchIconContainer: {
        padding: 10,
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 50
    },
    locationRow: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    locationIconContainer: {
        padding: 10,
        backgroundColor: "#b3b3b3",
        borderRadius: 25
    },
    locationText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "500"
    }
});