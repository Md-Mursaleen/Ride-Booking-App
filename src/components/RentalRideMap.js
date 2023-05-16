import { StyleSheet, View } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const RentalRideMap = ({ origin }) => {
    return (
        <View>
            <MapView style={styles.mapViewStyle}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={
                    {
                        latitude: origin.lat,
                        longitude: origin.lng,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121
                    }
                }>
                <Marker coordinate={{
                    latitude: origin.lat,
                    longitude: origin.lng
                }}
                    title={"Origin"} />
            </MapView>
        </View>
    );
}

export default RentalRideMap;

const styles = StyleSheet.create({
    mapViewStyle: {
        height: "100%",
        width: "100%"
    }
});