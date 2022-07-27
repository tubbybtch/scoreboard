import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

const tfButtons = ["True", "False"];

const RadioButton = (props) => {
	const unchecked = <Image source={require("./radio-unchecked.png")} style={styles.tinyIcon}/>;
	const checked = <Image source={require("./radio-checked.png")} style={styles.tinyIcon}/>;
    const onSelect = (index, value) => {
        props.onSelect(props.value);
    }

    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
				{props.selected ? checked : unchecked}
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
        color: "white",
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
    },
	tinyIcon: {
		width: 50,
		height: 50,
		margin: 2
	}
});

export default RadioButton;