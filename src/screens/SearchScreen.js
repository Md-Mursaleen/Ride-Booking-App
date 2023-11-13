import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Keyboard, Text, Pressable } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import LocationRow from "../components/LocationRow";
import HomeMap from "../components/HomeMap";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const home = {
    description: "Home",
    details: {
        geometry: {
            location: {
                lat: 28.53352,
                lng: 77.210886
            }
        }
    }
};
const work = {
    description: "Work",
    details: {
        geometry: {
            location: {
                lat: 28.5921401,
                lng: 77.04604810000001
            }
        }
    }
};

const SearchScreen = ({ route }) => {
    const { showRide } = route.params;
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const navigation = useNavigation();
    const NavigationtoRide = () => {
        if (origin && destination) {
            navigation.navigate("Ride", {
                origin,
                destination
            });
        }
    };
    useEffect(() => {
        NavigationtoRide();
    }, [origin, destination]);
    const keyboardShowListener = Keyboard.addListener(
        "keyboardDidShow",
        () => {
            setKeyboardOpen(true);
        }
    );
    const keyboardHideListener = Keyboard.addListener(
        "keyboardDidHide",
        () => {
            setKeyboardOpen(false);
        }
    );
    return (
        <View style={styles.container}>
            {showRide && (
                <View style={styles.rideHeaderContainer}>
                    <Ionicons name="arrow-back-sharp" size={30} color="black" style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
                    <Text style={styles.rideHeaderTextStyle}>Plan your ride</Text>
                </View>
            )}
            {!showRide && (
                <View style={styles.userHeaderContainer}>
                    <Ionicons name="arrow-back-sharp" size={30} color="black" style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
                    <View style={styles.userHeaderSubContainer}>
                        <View style={styles.iconContainer}>
                            <Pressable style={styles.iconStyle}>
                                <Entypo name="user" size={17} color="#cdcdcd" />
                            </Pressable>
                        </View>
                        <Text style={styles.userHeaderSubContainerTextStyle}>Select Rider</Text>
                        <Entypo name="chevron-small-down" size={20} color="black" style={{ marginLeft: 3 }} />
                    </View>
                </View>
            )}
            <View style={[showRide ? { marginTop: 5 } : { marginTop: -13 }]}>
                <GooglePlacesAutocomplete onPress={(data, details = null) => {
                    setOrigin({ data, details });
                }}
                    placeholder="Where from?"
                    fetchDetails
                    query={{
                        key: "AIzaSyAExeQwZ97hbothiv9vBVVrOunsV2oLBUA",
                        language: "en"
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        container: {
                            position: "absolute",
                            top: 0,
                            left: 10,
                            right: 10
                        },
                        textInput: {
                            padding: 10,
                            marginLeft: 20,
                            marginVertical: 5,
                            backgroundColor: "#f4f4f4"
                        },
                        listView: {
                            position: "absolute",
                            top: 112
                        },
                        separator: {
                            height: 1,
                            backgroundColor: "#eee"
                        }
                    }}
                    renderRow={(data) => (
                        <LocationRow data={data} />
                    )}
                    currentLocationLabel="Current Location"
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[home, work]} />
                <GooglePlacesAutocomplete onPress={(data, details = null) => {
                    setDestination({ data, details });
                }}
                    placeholder="Where to?"
                    fetchDetails
                    query={{
                        key: "AIzaSyAExeQwZ97hbothiv9vBVVrOunsV2oLBUA",
                        language: "en"
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        container: {
                            position: "absolute",
                            top: 55,
                            left: 10,
                            right: 10
                        },
                        textInput: {
                            padding: 10,
                            marginLeft: 20,
                            marginVertical: 5,
                            backgroundColor: "#f4f4f4"
                        },
                        separator: {
                            height: 1,
                            backgroundColor: "#eee"
                        }
                    }}
                    renderRow={(data) => (
                        <LocationRow data={data} />
                    )} />
                <View style={styles.circleStyle} />
                <View style={styles.lineStyle} />
                <View style={styles.squareStyle} />
            </View>
            {!keyboardOpen && showRide === false && (
                <View style={[styles.mapStyle, showRide ? { height: Dimensions.get("window").height - 158 } : { height: Dimensions.get("window").height - 170 }]}>
                    <HomeMap latitudeDelta={0.0420} longitudeDelta={0.0071} />
                </View>
            )}
        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    rideHeaderContainer: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    rideHeaderTextStyle: {
        marginLeft: "25%",
        fontSize: 17.5,
        fontWeight: "500"
    },
    userHeaderContainer: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center"
    },
    userHeaderSubContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        width: 32,
        height: 32,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 100,
        backgroundColor: "#eee",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    iconStyle: {
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 50
    },
    userHeaderSubContainerTextStyle: {
        marginLeft: 10,
        fontSize: 14.5,
        fontWeight: "500"
    },
    circleStyle: {
        position: "absolute",
        width: 5,
        height: 5,
        top: 20,
        left: 15,
        backgroundColor: "black",
        borderRadius: 5,
    },
    lineStyle: {
        position: "absolute",
        width: 1,
        height: 50,
        top: 28,
        left: 17,
        backgroundColor: "#c4c4c4"
    },
    squareStyle: {
        position: "absolute",
        width: 5,
        height: 5,
        top: 80,
        left: 15,
        backgroundColor: "black"
    },
    mapStyle: {
        marginTop: "auto"
    }
});