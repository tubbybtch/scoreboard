import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Button,
    TextInput
} from 'react-native';
import RadioButtons from '../NativeComponents/RadioButtons';

const QuestionFillIn = (props) => {
    console.log(props);
    const [answer,
        setAnswer] = useState(null);

    const onSelect = (index, value) => {
        setAnswer(value);
    }

    const submitAnswer = () => {
        console.log("submitted:", answer);
        setAnswer(("" + answer).toUpperCase());
        props.setAnswer(("" + answer).toUpperCase());
        props.setQuestionComplete(true);
    }

    if (!props.question.numberLinesInAnswer) 
        props.question.numberLinesInAnswer = 1;
    
    return (
        <View style={styles.mainScreen}>
            <Text style={styles.messageText}>{props.question.prompt}</Text><br/>
            <View style={styles.buttonContainer}>
                <TextInput
                    onChangeText={setAnswer}
                    style={styles.inputBox}
                    multiline={true}
                    numberOfLines={props.question.numberLinesInAnswer}/>
            </View>
            <View style={styles.submitButtonView}>
                {answer !== null
                    ? <Button onPress={submitAnswer} title="Submit" color="black"/>
                    : null}
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
    },
    inputBox: {
        backgroundColor: "white",
        fontSize: "30px",
        fontWeight: "bold",
        borderColor: 'gray',
        borderWidth: 1,
        width: "100%",
        align: "center"
    },
	submitButtonView: {
		paddingTop: 70,
	}
});

export default QuestionFillIn;