import React, { useState } from 'react';
import {
    View,
	Text,
    StyleSheet
} from 'react-native';
import { QUESTION_TYPE } from '../../tridget_constants';
import QuestionTF from './QuestionTF';
import QuestionMC from './QuestionMC';
import QuestionSubmitted from '../QuestionSubmitted';

const Question = (props) => {
	console.log(props);
	const [answer,
		setAnswer] = useState(null);
	const [questionComplete,
		setQuestionComplete] = useState(false);



	var content = null;
	if (questionComplete) {
		content = <QuestionSubmitted />
	} else if (props.question.type == QUESTION_TYPE.TRUE_FALSE) {
		content = <QuestionTF question={props.question} setAnswer={setAnswer} setQuestionComplete={setQuestionComplete}/>
	} else if (props.question.type == QUESTION_TYPE.MULTIPLE_CHOICE) {
		content = <QuestionMC question={props.question} setAnswer={setAnswer} setQuestionComplete={setQuestionComplete}/>
	} 

    return (
        <View style={styles.mainScreen}>
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