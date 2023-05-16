import { StyleSheet, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../src/graphql/queries";

const HomeMap = ({ latitudeDelta, longitudeDelta }) => {
    const [cars, setCars] = useState([]);
    const getImage = (type) => {
        if (type === "UberX") {
            return require("../../assets/images/top-UberX.png");
        }
        else if (type === "UberXL") {
            return require("../../assets/images/top-UberXL.png");
        }
        else {
            return require("../../assets/images/top-Comfort.png");
        }
    };
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await API.graphql(graphqlOperation(listCars));
                setCars(response.data.listCars.items);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCars();
    }, []);
    return (
        <View>
            <MapView style={styles.mapViewStyle}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={
                    {
                        latitude: 28.450627,
                        longitude: -16.263045,
                        latitudeDelta: latitudeDelta,
                        longitudeDelta: longitudeDelta
                    }
                }
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
                ]}>
                {cars.map((car) => (
                    <Marker
                        key={car.id}
                        coordinate={{
                            latitude: car.latitude,
                            longitude: car.longitude
                        }}>
                        <Image source={getImage(car.type)} style={[styles.imageStyle, { transform: [{ rotate: `${car.heading}deg` }] }]} />
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
        height: 65,
        width: 65,
        resizeMode: "contain"
    }
});