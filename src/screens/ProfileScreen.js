import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import ProfileDetails from "../components/ProfileDetails";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Md Mursaleen</Text>
                <View style={styles.headerIconContainer}>
                    <Pressable style={styles.headerIconStyle}
                        onPress={() => navigation.navigate("ProfileSetting")}><Entypo name="user" size={30} color="#cdcdcd" />
                    </Pressable>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.iconRow}>
                    <View style={[styles.iconContainer, { marginLeft: 15 }]}>
                        <Entypo name="mail" size={30} />
                        <Text style={styles.iconText}>Message</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Ionicons name="md-wallet-sharp" size={30} />
                        <Text style={styles.iconText}>Wallet</Text>
                    </View>
                    <Pressable style={[styles.iconContainer, { marginRight: 15 }]}
                        onPress={() => navigation.navigate("Trips")}>
                        <MaterialCommunityIcons name="clock-time-three" size={30} />
                        <Text style={styles.iconText}>Trips</Text>
                    </Pressable>
                </View>
                <View style={styles.detailsContainer}>
                    <ProfileDetails />
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerContainer: {
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerText: {
        marginLeft: 20,
        fontSize: 34,
        fontWeight: "600"
    },
    headerIconContainer: {
        width: 65,
        height: 65,
        marginRight: 20,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    headerIconStyle: {
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 50
    },
    iconRow: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconContainer: {
        width: 110,
        height: 95,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    iconText: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "500"
    },
    detailsContainer: {
        marginTop: 10,
        borderTopWidth: 7,
        borderTopColor: "#f1f1f1"
    }
});