import { StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import types from "../../assets/data/types";
import RideRow from "./RideRow";

const Rides = ({ typeState, onSubmit }) => {
    const [selectedType, setSelectedType] = typeState;
    return (
        <>
            <ScrollView>
                {types.map((type) => (
                    <RideRow key={type.id} type={type} isSelected={type.type === selectedType}
                        onPress={() => setSelectedType(type.type)}
                    />))}
            </ScrollView>
            <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
                <Text style={styles.buttonText}>Confirm {selectedType}</Text>
            </TouchableOpacity>
        </>
    );
}

export default Rides;

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