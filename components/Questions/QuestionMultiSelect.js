import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import QuestionMultiSelectItem from './QuestionMultiSelectItem';

const QuestionMultiSelect = (props) => {
    console.log(props);
    const [answer,
        setAnswer] = useState(Array(props.question.choices.length).fill(false));

    const onChange = (index, value) => {
		console.log(index, value);
		var tempArray = [...answer];
		tempArray[index] = value;
        setAnswer(tempArray);
    }

	const submitAnswer = () => {
		console.log("submitted:",answer);
		setAnswer(answer);
		props.setAnswer(answer);
		props.setQuestionComplete(true);
	}

    var opts = [];
    for (var ix=0; ix < props.question.choices.length; ix++) {

        opts.push(<QuestionMultiSelectItem text={props.question.choices[ix]} index={ix} key={ix} onChange={onChange} />);
    }

    return (
        <View style={styles.mainScreen}>
			<View>
            <Text style={styles.messageText}>{props.question.prompt}</Text><br/>
			</View>
			<View>
				{opts}
			</View>
            <View style={styles.buttonContainer}>
                <Button onPress={submitAnswer} title="Submit" color="black"/>
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
        fontSize: "25px",
        fontWeight: "bold",
        marginLeft: 15
    },
    buttonContainer: {
        marginTop:40,
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

export default QuestionMultiSelect;