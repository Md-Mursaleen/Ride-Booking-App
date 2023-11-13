import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useDispatch } from "react-redux";
import { setTravelTimeInformation } from "../../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAExeQwZ97hbothiv9vBVVrOunsV2oLBUA";

const RideMap = ({ origin, destination, rentals }) => {
    const mapRef = useRef(null);
    const dispatch = useDispatch();
    {
        !rentals &&
            setTimeout(() => {
                mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
                    animated: true,
                    edgePadding: {
                        top: 50,
                        right: 50,
                        bottom: 50,
                        left: 50
                    }
                });
            }, 1000);
        useEffect(() => {
            if (!origin || !destination) return;
            const getTravelTime = async () => {
                fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.data.description}&destinations=${destination.data.description}&key=${GOOGLE_MAPS_APIKEY}`).then((res) => res.json()).then((data) => {
                    dispatch(setTravelTimeInformation(
                        data.rows[0].elements[0]
                    ));
                });
            };
            getTravelTime();
        }, [origin, destination, GOOGLE_MAPS_APIKEY]);
    };
    return (
        <View>
            {!rentals ? (
                <MapView ref={mapRef}
                    userInterfaceStyle="dark"
                    showsUserLocation={true}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: origin.details.geometry.location.lat,
                        longitude: origin.details.geometry.location.lng,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
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
                    ]} style={styles.mapViewStyle}>
                    <MapViewDirections origin={origin.data.description}
                        destination={destination.data.description}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={5}
                        strokeColor="black" />
                    <Marker coordinate={{
                        latitude: origin.details.geometry.location.lat,
                        longitude: origin.details.geometry.location.lng
                    }}
                        title={"Origin"}
                        identifier="origin" />
                    <Marker coordinate={{
                        latitude: destination.details.geometry.location.lat,
                        longitude: destination.details.geometry.location.lng
                    }}
                        title={"Destination"}
                        identifier="destination" />
                </MapView>
            ) : (
                <MapView style={styles.mapViewStyle}
                    showsUserLocation={true}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: origin.lat,
                        longitude: origin.lng,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121
                    }}>
                    <Marker draggable coordinate={{
                        latitude: origin.lat,
                        longitude: origin.lng
                    }}
                        title={"Origin"} />
                </MapView>
            )}
        </View>
    );
}

export default RideMap;

const styles = StyleSheet.create({
    mapViewStyle: {
        height: "100%",
        width: "100%"
    }
});