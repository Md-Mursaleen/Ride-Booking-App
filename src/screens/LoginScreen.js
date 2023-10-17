import "expo-dev-client";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    GoogleSignin.configure({
        webClientId: "384229130723-g4uej5md686vm3pjj5mdflv2p65h4d07.apps.googleusercontent.com"
    });
    function onAuthStateChanged(user) {
        setUser(user);
        AsyncStorage.setItem("SignedUserData", JSON.stringify({ user, loggedIn: true }));
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    useEffect(() => {
        if (user) {
            navigation.navigate("BottomTab");
        }
    }, [user]);
    const signInWithGoogle = async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const signedInUser = auth().signInWithCredential(googleCredential);
        signedInUser.then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error);
        });
        if (user) {
            navigation.navigate("BottomTab");
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={{ uri: "https://i.ibb.co/ZMhy8ws/uber-logo.png" }} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Login in to access your account</Text>
                <Image source={{ uri: "https://i.ibb.co/CsV9RYZ/login-image.png" }} style={styles.imageStyle} />
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => signInWithGoogle()}>
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
        height: 85,
        width: 90,
        resizeMode: "contain"
    },
    textStyle: {
        fontSize: 33,
        fontWeight: "500",
        color: "grey",
        opacity: 0.7
    },
    imageStyle: {
        height: 240,
        width: "100%",
        resizeMode: "contain"
    },
    buttonContainer: {
        marginTop: 20,
        width: "100%",
        height: 53,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "white"
    }
});