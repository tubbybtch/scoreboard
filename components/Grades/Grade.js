import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import Emoji from "react-native-emoji";

const Grade = (props) => {
    console.log(props);

    if (props.grade.correct) {
		var emojiNames = ["thumbsup", "hot_pepper", "grinning","champagne"];
		var messages = ["Great!", "So Hot!", "Yeah!","Cheers"];
    } else {
        var emojiNames = ["thumbsdown","frowning","scream","broken_heart"];
		var messages = ["Bummer...", "Pffffft...", "Ugh...","Heartbreaking"];
    }
	var index = Math.floor(Math.random() * emojiNames.length);

	if (typeof props.grade.correctAnswer == "object") {
		// array answers
		var correctAnswerArray = []
		for (var ix=0; ix < props.grade.correctAnswer.length; ix++) {
			if (props.grade.correctAnswer[ix]) {
				correctAnswerArray.push(props.question.choices[ix]);
			}
		}
		var correctAnswer = correctAnswerArray.join(", ");

		var yourAnswerArray = []
		for (var ix=0; ix < props.grade.teamAnswer.length; ix++) {
			if (props.grade.teamAnswer[ix]) {
				yourAnswerArray.push(props.question.choices[ix]);
			}
		}
		var yourAnswer = yourAnswerArray.join(", ");		

	} else {
		// string answers
		var correctAnswer = props.grade.correctAnswer;
		var yourAnswer = props.grade.teamAnswer;
	}




    return (
        <View style={styles.mainScreen}>
            <Emoji name={emojiNames[index]} style={{
                fontSize: 100
            }}/>
			<View style={styles.mewssageView}>
				<Text style={styles.messageText}>{messages[index]}</Text>
			</View>
            <View style={styles.textView}>
                <Text style={styles.messageText}>Correct Answer</Text>
                <Text style={styles.messageText}>{correctAnswer}</Text>
				<Text style={styles.messageText}>Your Answer</Text>
                <Text style={styles.messageText}>{yourAnswer}</Text>
				<Text style={styles.scoreText}>{props.grade.points} Pts.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        alignItems: "center"
    },
    messageText: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold"
    },
	scoreText: {
        color: "white",
        fontSize: "60px",
        fontWeight: "bold"
    },
	messageView: {
		marginTop: 25,
		alignItems: "center"
	},
	textView: {
		marginTop: 75,
		alignItems: "center"
	}
});

export default Grade;