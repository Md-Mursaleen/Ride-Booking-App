import React from "react";
import { View, Image, StyleSheet } from "react-native";

function TripDetails({ trips }) {
    const getImage = (type) => {
        if (type === "UberX") {
            return require("../../assets/images/UberX.jpeg");
        }
        else if (type === "UberXL") {
            return require("../../assets/images/UberXL.jpeg");
        }
        else {
            return require("../../assets/images/Comfort.jpeg");
        }
    };
    return (
        <>
            {trips.map((trip, index) => (
                <View key={index}>
                    <Image source={getImage(trip.type)} style={styles.imageStyle} />
                </View>
            ))}
        </>
    );
}

export default TripDetails;

const styles = StyleSheet.create({
    imageStyle: {
        width: 65,
        height: 65,
        borderRadius: 50
    }
});