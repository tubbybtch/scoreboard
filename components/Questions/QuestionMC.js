import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import RadioButtons from '../NativeComponents/RadioButtons';

const QuestionMC = (props) => {
	var opts = [];
	for (let option of props.question.choices) {
		opts.push({text: option, value: option})
	}


    return (
        <View style={styles.mainScreen}>
            <Text style={styles.messageText}>{props.question.prompt}</Text><br/>
            <View style={styles.buttonContainer}>
                <RadioButtons
                    options={opts}
                layout="column"
				setAnswer={() => {}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
		padding: 20
    },
    messageText: {
        color: "white",
        fontSize: "50px",
        fontWeight: "bold",
		marginLeft: 15
    },
    buttonContainer: {
        flexDirection: "row"
    },
});

export default QuestionMC;