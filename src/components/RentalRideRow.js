import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const RideRow = ({ type, isSelected, onPress }) => {
    const cars = {
        GoRentals: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_126,h_126/v1555366937/assets/8d/e95843-6f38-404f-a841-0ea74d6d64ec/original/Final_UberPool.png",
        SedanRentals: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png",
        XLRentals: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png"
    };
    return (
        <TouchableOpacity key={type.id} style={[styles.container, {
            backgroundColor: isSelected ? "#eee" : "white"
        }]}
            onPress={onPress}>
            <Image source={{ uri: cars[type.type] }} style={[{ marginLeft: type.marginLeft, marginRight: type.marginRight, height: type.height, width: type.width }, type.reSize && { resizeMode: "contain" }]} />
            <View style={{ marginLeft: 35 }}>
                <Text style={styles.titleText}>{type.title}{" "}</Text>
                <Text style={[styles.middleContainerText, { marginTop: 2 }]}>{type.description}</Text>
            </View>
            <View style={styles.priceContainer}>
                <View>
                    <Text style={styles.priceText}>${type.price}</Text>
                    <Text style={styles.priceTextperHour}>${type.price}/hour</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RideRow;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 5,
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
        marginLeft: 28,
        fontSize: 17,
        fontWeight: "bold"
    },
    priceTextperHour: {
        marginTop: 5,
        fontSize: 14.5,
        color: "#5d5d5d"
    },
    middleContainerText: {
        fontSize: 14,
        color: "#5d5d5d"
    }
});