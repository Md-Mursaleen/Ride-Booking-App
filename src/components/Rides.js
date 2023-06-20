import React from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from "react-native";
import types from "../../assets/data/types";
import rentaltypes from "../../assets/data/rentaltypes";
import RideRow from "./RideRow";
import RentalRideRow from "./RentalRideRow";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../../slices/navSlice";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Rides = ({ typeState, onSubmit, rentals }) => {
    const [selectedType, setSelectedType] = typeState;
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const navigation = useNavigation();
    return (
        <>
            {!rentals ? (
                <>
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <Ionicons name="arrow-back-sharp" size={26} color="black" style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
                            <Text style={styles.headerText}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
                        </View>
                        {types.map((type) => (
                            <RideRow key={type.id} type={type} isSelected={type.type === selectedType}
                                onPress={() => setSelectedType(type.type)}
                            />))}
                    </ScrollView>
                    <TouchableOpacity style={[styles.buttonContainer, selectedType === "" && { opacity: 0.7 }]} onPress={onSubmit}>
                        {selectedType !== "" ? (
                            <Text style={styles.buttonText}>Confirm {selectedType}</Text>
                        ) : (
                            <Text style={styles.buttonText}>Select a Ride</Text>
                        )}
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <Ionicons name="arrow-back-sharp" size={26} color="black" style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
                            <Text style={[styles.headerText, { marginLeft: 100 }]}>Select a Rental</Text>
                        </View>
                        {rentaltypes.map((type) => (
                            <RentalRideRow key={type.id} type={type} isSelected={type.type === selectedType}
                                onPress={() => setSelectedType(type.type)}
                            />))}
                    </ScrollView>
                    <TouchableOpacity style={[styles.buttonContainer, selectedType === "" && { opacity: 0.5 }]} onPress={onSubmit}>
                        {selectedType !== "" ? (
                            <Text style={styles.buttonText}>Confirm {selectedType}</Text>
                        ) : (
                            <Text style={styles.buttonText}>Select a Rental</Text>
                        )}
                    </TouchableOpacity>
                </>
            )}
        </>
    );
}

export default Rides;

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 15,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        marginLeft: 75,
        fontSize: 17.5,
        fontWeight: "500"
    },
    buttonContainer: {
        padding: 15,
        marginHorizontal: 10,
        alignItems: "center",
        backgroundColor: "black"
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white"
    }
});