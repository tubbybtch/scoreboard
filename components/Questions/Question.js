import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,Vibration} from 'react-native';
import {DESTINATION, ORIGIN, QUESTION_TYPE, ACTION} from '../../tridget_constants';

import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import RNBeep from 'react-native-a-beep';

import QuestionTF from './QuestionTF';
import QuestionMC from './QuestionMC';
import QuestionFillIn from './QuestionFillIn';
import QuestionMultiSelect from './QuestionMultiSelect';
import AnswerSubmitted from '../AnswerSubmitted';

const Question = (props) => {
    console.log(props);
    const [answer,
        setAnswer] = useState(null);

	const timeRunsOut = () => {
		console.log("time runs out");
		submitAnswer(null);
	}

    var content = null;
	if (props.question.type == QUESTION_TYPE.TRUE_FALSE) {
        content = <QuestionTF
            {...props}
            question={props.question} />
    } else if (props.question.type == QUESTION_TYPE.MULTIPLE_CHOICE) {
        content = <QuestionMC
            {...props}
            question={props.question} />
    } else if (props.question.type == QUESTION_TYPE.FILL_IN) {
        content = <QuestionFillIn
            {...props}
            question={props.question}/>
    } else if (props.question.type == QUESTION_TYPE.MULTIPLE_SELECT) {
		console.log(props.question.type, QUESTION_TYPE.MULTIPLE_SELECT);
        content = <QuestionMultiSelect
            {...props}
            question={props.question} />
    } 

    return (
        <View style={styles.mainScreen}>
			{props.question.timeLimit > 0 ?
            <View style={styles.timerView}>
                <Text style={styles.descriptionText}>Seconds </Text>
				<CountdownCircleTimer
                    isPlaying
                    duration={props.question.timeLimit}
					size={100}
					onComplete={timeRunsOut}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[60, 30, 10, 0]}>
                    {({remainingTime}) => <Text style={styles.countDownText}>{remainingTime}</Text>}
                </CountdownCircleTimer>
				<Text style={styles.descriptionText}> Remaining</Text>
            </View> : null}
            <View style={styles.questionView}>
                {content}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: "center"
    },
	timerView: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		padding: 20
	},
	countDownText: {
		color: "orange",
		fontSize: 30,
		fontWeight: "bold"
	},
	descriptionText: {
		fontSize: 20,
		color: "orange",
		fontWeight: "bold"
	},
	questionView: {
		flex: 6,
		justifyContent: "center",
	},	
    messageText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold"
    }
});

export default Question;