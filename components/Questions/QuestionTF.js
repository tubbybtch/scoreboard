import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import RadioButtons from '../NativeComponents/RadioButtons';

const QuestionTF = (props) => {

    const [answer,
        setAnswer] = useState(null);

    const onSelect = (index, value) => {
        setAnswer(value);
    }

	const submitAnswer = () => {
		console.log("submitted:",answer);
		setAnswer((""+answer).toUpperCase());
		props.setAnswer((""+answer).toUpperCase());
		props.setQuestionComplete(true);
	}

    return (
        <View style={styles.mainScreen}>
            <Text style={styles.messageText}>{props.question.prompt}</Text><br/>
            <View style={styles.buttonContainer}>
                <RadioButtons
                    options={[ 
                    {
                        text: "True",
                        value: true
                    }, {
                        text: "False",
                        value: false
                    }
                ]}
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
		marginLeft: 20
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

export default QuestionTF;