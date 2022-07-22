import React from 'react';
import {
    View,
	Text,
    StyleSheet
} from 'react-native';
import { QUESTION_TYPE } from '../../tridget_constants';
import QuestionTF from './QuestionTF';

const Question = (props) => {
	console.log(props);
	var content = null;
	if (props.question.type == QUESTION_TYPE.TRUE_FALSE) {
		content = <QuestionTF question={props.question} />
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