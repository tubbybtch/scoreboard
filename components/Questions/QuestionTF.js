import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import RadioButtons from '../NativeComponents/RadioButtons';

const tfButtons = ["True", "False"];

const QuestionTF = (props) => {

    const [answer,
        setAnswer] = useState(null);

    const onSelect = (index, value) => {
        setAnswer(value);
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
                layout="column"/>

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
        fontWeight: "bold"
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
        color: "grey",
        fontSize: "30px",
        fontWeight: "bold",
        justifyContent: "center"
    }
});

export default QuestionTF;