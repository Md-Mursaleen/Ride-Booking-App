import { StyleSheet, View } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAExeQwZ97hbothiv9vBVVrOunsV2oLBUA";

const RideMap = ({ origin, destination }) => {
    return (
        <View>
            <MapView style={styles.mapViewStyle}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={
                    {
                        latitude: origin.details.geometry.location.lat,
                        longitude: origin.details.geometry.location.lng,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121
                    }
                }>
                <MapViewDirections origin={origin.data.description}
                    destination={destination.data.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="black" />
                <Marker coordinate={{
                    latitude: origin.details.geometry.location.lat,
                    longitude: origin.details.geometry.location.lng
                }}
                    title={"Origin"} />
                <Marker coordinate={{
                    latitude: destination.details.geometry.location.lat,
                    longitude: destination.details.geometry.location.lng
                }} title={"Destination"} />
            </MapView>
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