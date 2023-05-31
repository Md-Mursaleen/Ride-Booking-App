import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const ProfileSettingScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <Pressable style={{ marginLeft: 15 }} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={23} />
                </Pressable>
                <Text style={styles.settingText}>Settings</Text>
                <View style={styles.iconContainer}>
                    <Pressable style={styles.iconStyle}>
                        <Entypo name="user" size={30} color="#cdcdcd" />
                    </Pressable>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.userText}>Md Mursaleen</Text>
                    <Text style={styles.accountText}>EDIT ACCOUNT</Text>
                </View>
                <View style={styles.middleContainer}>
                    <Text style={[styles.headerText, { marginTop: 20 }]}>Saved Places</Text>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.middleSubContainer}>
                            <View>
                                <SimpleLineIcons name="home" size={20} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.middleText}>Home</Text>
                                <Text style={styles.middleSubText}>Add Home</Text>
                            </View>
                        </View>
                        <View style={[styles.middleSubContainer, { marginTop: 30 }]}>
                            <View>
                                <MaterialIcons name="work-outline" size={23} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.middleText}>Work</Text>
                                <Text style={styles.middleSubText}>Add Work</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomSubContainer}>
                        <Text style={styles.headerText}>Other Options</Text>
                        <Pressable onPress={() => Auth.signOut()}>
                            <Text style={styles.bottomText}>Sign Out</Text>
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
    iconContainer: {
        width: 75,
        height: 75,
        marginTop: 20,
        backgroundColor: "#eee",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
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
    settingText: {
        marginLeft: 15,
        fontSize: 38,
        fontWeight: "500"
    },
    userText: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    },
    accountText: {
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
    middleSubContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "500"
    },
    middleText: {
        fontSize: 15,
        fontWeight: "500"
    },
    middleSubText: {
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
    bottomText: {
        marginTop: 25,
        fontSize: 18,
        fontWeight: "500",
        color: "grey"
    }
});
