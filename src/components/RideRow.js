import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../../slices/navSlice";

const RideRow = ({ type, isSelected, onPress }) => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const SURGE_CHARGE_RATE = 1.5;
    const cars = {
        UberX: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        UberXL: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
        Lux: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
        UberAuto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1648432113/assets/6e/86fff4-a82a-49b9-8b0b-54b341ea0790/original/Uber_Auto_312x208_pixels_Mobile.png",
        UberTaxi: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1029,h_579/v1555367272/assets/3c/9d50f6-c27c-456b-9f6f-2f8db5ab7a40/original/Final_Taxi.png",
        UberMoto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
    };
    return (
        <TouchableOpacity key={type.id} style={[styles.container, {
            backgroundColor: isSelected ? "#eee" : "white"
        }]}
            onPress={onPress}>
            <Image source={{ uri: cars[type.type] }} style={{ marginLeft: type.marginLeft, marginRight: type.marginRight, height: type.height, width: type.width, resizeMode: "contain" }} />
            <View style={{ marginLeft: 35 }}>
                <Text style={styles.titleText}>
                    {type.title}{" "}
                    <Ionicons name="person" size={12.5} /><Text style={{ fontSize: 14.5 }}>{type.capacity}</Text>
                </Text>
                <Text style={{ fontSize: 14, color: "#5d5d5d" }}>{travelTimeInformation?.duration?.text} total time</Text>
            </View>
            <View style={styles.priceContainer}>
                <Ionicons name="pricetag" size={18} color="green" style={{ marginRight: 3 }} />
                <Text style={styles.priceText}>${(travelTimeInformation?.duration?.value * type.multiplier * SURGE_CHARGE_RATE / 100).toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default RideRow;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    titleText: {
        marginBottom: 5,
        fontSize: 18.5,
        fontWeight: "500"
    },
    priceContainer: {
        marginLeft: "auto",
        width: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    priceText: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: "bold"
    }
});