import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import ProfileDetails from "../components/ProfileDetails";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [signedUser, setSignedUser] = useState();
    const getSignedUserData = async () => {
        const signedUserData = await AsyncStorage.getItem("SignedUserData");
        setSignedUser(JSON.parse(signedUserData));
    };
    useEffect(() => {
        getSignedUserData();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{signedUser?.user?.displayName}</Text>
                <View style={[styles.headerIconContainer, !signedUser && { backgroundColor: "#eee" }]}>
                    <Pressable style={[styles.headerIconStyle, !signedUser && { backgroundColor: "#f6f6f6", justifyContent: "center" }]}
                        onPress={() => navigation.navigate("ProfileSetting")}>
                        {signedUser ? (
                            <Image source={{ uri: signedUser?.user?.photoURL }} style={styles.imageStyle} />
                        ) : (
                            <Entypo name="user" size={30} color="#cdcdcd" />
                        )}
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
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    headerIconStyle: {
        width: 55,
        height: 55,
        alignItems: "center",
        borderRadius: 50
    },
    imageStyle: {
        width: 52,
        height: 52,
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