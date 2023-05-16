import { StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import rentaltypes from "../../assets/data/rentaltypes";
import RentalRideRow from "./RentalRideRow";

const RentalRides = ({ typeState, onSubmit }) => {
    const [selectedType, setSelectedType] = typeState;
    return (
        <>
            <ScrollView>
                {rentaltypes.map((type) => (
                    <RentalRideRow key={type.id} type={type} isSelected={type.type === selectedType}
                        onPress={() => setSelectedType(type.type)}
                    />))}
            </ScrollView>
            <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
                <Text style={styles.buttonText}>Confirm {selectedType}</Text>
            </TouchableOpacity>
        </>
    );
}

export default RentalRides;

const styles = StyleSheet.create({
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