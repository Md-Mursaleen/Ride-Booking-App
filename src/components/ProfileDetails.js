import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProfileDetails = () => {
    return (
        <View>
            <View style={[styles.itemContainer, { marginTop: 15 }]}>
                <Foundation name="shopping-bag" size={20} />
                <Text style={styles.itemTextStyle}>Business hub</Text>
            </View>
            <View style={styles.itemContainer}>
                <Ionicons name="md-gift-sharp" size={20} />
                <Text style={styles.itemTextStyle}>Send a gift</Text>
            </View>
            <View style={styles.itemContainer}>
                <Ionicons name="md-help-buoy-sharp" size={20} />
                <Text style={styles.itemTextStyle}>Help</Text>
            </View>
            <View style={styles.itemContainer}>
                <FontAwesome5 name="route" size={20} />
                <Text style={styles.itemTextStyle}>Shuttle Routes</Text>
            </View>
            <View style={styles.itemContainer}>
                <MaterialCommunityIcons name="shield-check" size={20} />
                <Text style={styles.itemTextStyle}>COVID-19 Safety Center</Text>
            </View>
            <View style={styles.itemContainer}>
                <MaterialIcons name="settings" size={20} />
                <Text style={styles.itemTextStyle}>Settings</Text>
            </View>
            <View style={styles.itemContainer}>
                <FontAwesome5 name="shopping-bag" size={18} />
                <Text style={styles.itemTextStyle}>Earn by driving or delivering</Text>
            </View>
            <View style={styles.itemContainer}>
                <AntDesign name="exclamationcircle" size={18} />
                <Text style={styles.itemTextStyle}>Legal</Text>
            </View>
            <Text style={styles.versionTextStyle}>v4.470.10004</Text>
        </View>
    );
}

export default ProfileDetails;

const styles = StyleSheet.create({
    itemContainer: {
        marginLeft: 20,
        marginTop: 35,
        flexDirection: "row",
        alignItems: "center"
    },
    itemTextStyle: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: "500"
    },
    versionTextStyle: {
        marginLeft: 20,
        marginBottom: 15,
        marginTop: 30,
        fontSize: 14,
        color: "grey"
    }
});