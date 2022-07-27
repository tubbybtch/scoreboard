import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import RadioButtons from '../NativeComponents/RadioButtons';

const QuestionMC = (props) => {

    const [answer,
        setAnswer] = useState(null);

    const onSelect = (index, value) => {
        setAnswer(value);
    }

	const submitAnswer = () => {
		console.log("submitted:",answer);
		setAnswer(answer);
		props.setAnswer(answer);
		props.setQuestionComplete(true);
	}

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
				setAnswer={setAnswer}/>
            </View>
			<View>
				<br/><br/>
				{answer !== null ? <Button onPress={submitAnswer} title="Submit" color="black" /> : null}
			</View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    messageText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
		marginLeft: 15
    },
    buttonContainer: {
        flexDirection: "row"
    },
    button: {
        height: 50,
        width: 150,
        margin: 10,
        backgroundColor: "white"
    },
    buttonText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
        justifyContent: "center"
    }
});

export default QuestionMC;