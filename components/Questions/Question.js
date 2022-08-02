import React, { useState } from 'react';
import {
    View,
	Text,
    StyleSheet
} from 'react-native';
import { DESTINATION, ORIGIN, QUESTION_TYPE, ACTION } from '../../tridget_constants';
import QuestionTF from './QuestionTF';
import QuestionMC from './QuestionMC';
import AnswerSubmitted from '../AnswerSubmitted';

const Question = (props) => {
	console.log(props);
	const [answer,
		setAnswer] = useState(null);
	const [questionComplete,
		setQuestionComplete] = useState(false);

	const submitAnswer = (answer) => {
		setAnswer(answer);

		// code to submit answer to game master
		var packet = {
			to: DESTINATION.GAME_MASTER,
			from: ORIGIN.PLAYER,
			type: ACTION.SEND_ANSWER,
			payload: {
				teamName: props.teamName,
				answer: answer
			}
		}
		props.socket.sendJsonMessage(packet);
		console.log("Answer Sent:",answer);
	}





	var content = null;
	if (questionComplete) {
		content = <AnswerSubmitted {...props} answer={answer}/>
	} else if (props.question.type == QUESTION_TYPE.TRUE_FALSE) {
		content = <QuestionTF {...props}  question={props.question} setAnswer={submitAnswer} setQuestionComplete={setQuestionComplete}/>
	} else if (props.question.type == QUESTION_TYPE.MULTIPLE_CHOICE) {
		content = <QuestionMC {...props} question={props.question} setAnswer={submitAnswer} setQuestionComplete={setQuestionComplete}/>
	} 

    return (
        <View style={styles.mainScreen} >
			{content}
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: "center",
     },
    messageText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
    },
});

export default Question;