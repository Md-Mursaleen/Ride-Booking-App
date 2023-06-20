import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase";
import "firebase/compat/firestore";
import Ionicons from "react-native-vector-icons/Ionicons";

const TripsScreen = () => {
    const navigation = useNavigation();
    const [lastRide, setLastRide] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection("trips").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastRide(doc.data());
            });
        });
        return () => unsubscribe();
    }, []);
    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={28} color="#282828" style={styles.iconStyle} onPress={() => navigation.goBack()} />
            <Text style={styles.titleStyle}>Choose a trip</Text>
            <View style={styles.notripContainer}>
                <Text style={styles.noTripText}>You haven't taken a trip yet</Text>
                <TouchableOpacity style={styles.retryContainer}>
                    <Text style={styles.retryText}>RETRY</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TripsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    iconStyle: {
        marginLeft: 15,
        marginTop: 50
    },
    titleStyle: {
        marginLeft: 15,
        fontSize: 33.5,
        fontWeight: "500",
        color: "black"
    },
    notripContainer: {
        marginTop: 330,
        alignItems: "center"
    },
    noTripText: {
        fontSize: 18.5,
        color: "#313131"
    },
    retryContainer: {
        marginTop: 25,
        width: 90,
        height: 51.5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#313131",
        borderRadius: 3
    },
    retryText: {
        fontSize: 17,
        fontWeight: "500"
    }
});
