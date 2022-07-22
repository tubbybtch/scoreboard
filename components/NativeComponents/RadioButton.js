import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';

const tfButtons = ["True", "False"];

const RadioButton = (props) => {

    const onSelect = (index, value) => {
        props.onSelect(props.value);
    }

    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
				<FontAwesomeIcon icon={faMugSaucer} />
                <View style={props.selected ? styles.buttonSelected : styles.button}></View>
                <Text style={props.selected ? styles.buttonTextSelected : styles.buttonText}>{props.text}</Text >
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row"
	},
    messageText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: "row"
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: "lightgrey",
        borderRadius: 100,
		marginBottom: 15
    },
	buttonSelected: {
        height: 50,
        width: 50,
        backgroundColor: "white",
        borderRadius: 100,
		marginBottom: 15
    },
    buttonText: {
        color: "lightgrey",
        fontSize: "30px",
        fontWeight: "bold",
        justifyContent: "center",
		marginLeft: 10,
		marginRight: 20
    },
	buttonTextSelected: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
        justifyContent: "center",
		marginLeft: 10,
		marginRight: 20
    }
});

export default RadioButton;