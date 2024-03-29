import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileSettingScreen = () => {
    const navigation = useNavigation();
    const [signedUser, setSignedUser] = useState();
    const getSignedUserData = async () => {
        const signedUserData = await AsyncStorage.getItem("SignedUserData");
        setSignedUser(JSON.parse(signedUserData));
    };
    useEffect(() => {
        getSignedUserData();
    }, []);
    const signOutWithGoogle = async () => {
        auth().signOut();
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <Pressable style={{ marginLeft: 15 }} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={23} />
                </Pressable>
                <Text style={styles.settingTextStyle}>Settings</Text>
                <View style={styles.iconContainer}>
                    <Pressable style={styles.iconStyle}>
                        <Entypo name="user" size={30} color="#cdcdcd" />
                    </Pressable>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.userTextStyle}>{signedUser?.user?.displayName}</Text>
                    <Text style={styles.accountTextStyle}>EDIT ACCOUNT</Text>
                </View>
                <View style={styles.middleContainer}>
                    <Text style={[styles.headerTextStyle, { marginTop: 20 }]}>Saved Places</Text>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.middleSubContainer}>
                            <View>
                                <Octicons name="home" size={21} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.middleTextStyle}>Home</Text>
                                <Text style={styles.middleSubTextStyle}>Add Home</Text>
                            </View>
                        </View>
                        <View style={[styles.middleSubContainer, { marginTop: 30 }]}>
                            <View>
                                <MaterialIcons name="work-outline" size={23} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.middleTextStyle}>Work</Text>
                                <Text style={styles.middleSubTextStyle}>Add Work</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomSubContainer}>
                        <Text style={styles.headerTextStyle}>Other Options</Text>
                        <Pressable onPress={() => signOutWithGoogle()}>
                            <Text style={styles.bottomTextStyle}>Sign Out</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfileSettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    settingTextStyle: {
        marginLeft: 15,
        fontSize: 38,
        fontWeight: "500"
    },
    iconContainer: {
        width: 75,
        height: 75,
        marginTop: 20,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        borderRadius: 50
    },
    iconStyle: {
        width: 65,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 50
    },
    userTextStyle: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    },
    accountTextStyle: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
        color: "grey"
    },
    middleContainer: {
        marginHorizontal: 15,
        marginTop: 30,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    headerTextStyle: {
        fontSize: 20,
        fontWeight: "500"
    },
    middleSubContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    middleTextStyle: {
        fontSize: 15,
        fontWeight: "500"
    },
    middleSubTextStyle: {
        marginTop: 15,
        fontSize: 13,
        color: "#626262"
    },
    bottomContainer: {
        marginTop: 18,
        borderTopColor: "#eaeaea",
        borderTopWidth: 4
    },
    bottomSubContainer: {
        marginTop: 20,
        marginLeft: 15
    },
    bottomTextStyle: {
        marginTop: 25,
        fontSize: 18,
        fontWeight: "500",
        color: "grey"
    },
    imageStyle: {
        width: 75,
        height: 75,
        borderRadius: 50
    }
});
