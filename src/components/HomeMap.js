import React from "react";
import { StyleSheet, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const HomeMap = ({ latitudeDelta, longitudeDelta }) => {
    const cars = [
        {
            id: "1",
            heading: 38,
            latitude: 28.536877,
            longitude: 77.215788,
            type: "Comfort"
        },
        {
            id: "2",
            heading: 40,
            latitude: 28.53987,
            longitude: 77.219088,
            type: "Comfort"
        },
        {
            id: "3",
            heading: 0,
            latitude: 28.534197,
            longitude: 77.214648,
            type: "UberX"
        },
        {
            id: "4",
            heading: 23,
            latitude: 28.539107,
            longitude: 77.214798,
            type: "UberX"
        },
        {
            id: "5",
            heading: 28,
            latitude: 28.539119,
            longitude: 77.215728,
            type: "UberXL"
        },
        {
            id: "6",
            heading: 30,
            latitude: 28.59987,
            longitude: 77.211088,
            type: "UberX"
        },
        {
            id: "7",
            heading: 42,
            latitude: 28.53987,
            longitude: 77.225788,
            type: "Comfort"
        },
        {
            id: "8",
            heading: 18,
            latitude: 28.533119,
            longitude: 77.219728,
            type: "Scooty"
        },
        {
            id: "9",
            heading: 10,
            latitude: 28.53987,
            longitude: 77.213928,
            type: "Scooty"
        }
    ];
    const getImage = (type) => {
        if (type === "UberX") {
            return require("../../assets/images/top-UberX.png");
        }
        else if (type === "UberXL") {
            return require("../../assets/images/top-UberXL.png");
        }
        else if (type === "Comfort") {
            return require("../../assets/images/top-Comfort.png");
        }
        else {
            return require("../../assets/images/uber-scooty.png");
        }
    };
    return (
        <View>
            <MapView showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.536197,
                    longitude: 77.216648,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: longitudeDelta
                }}
                customMapStyle={[
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]}
                style={styles.mapViewStyle}>
                {cars.map((car) => (
                    <Marker
                        key={car.id}
                        coordinate={{
                            latitude: car.latitude,
                            longitude: car.longitude
                        }}>
                        <Image source={getImage(car.type)} style={[styles.imageStyle, car.type === "Scooty" && { height: 80, width: 80 }, { transform: [{ rotate: `${car.heading}deg` }] }]} />
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

export default HomeMap;

const styles = StyleSheet.create({
    mapViewStyle: {
        height: "100%",
        width: "100%"
    },
    imageStyle: {
        height: 55,
        width: 55,
        resizeMode: "contain"
    }
});