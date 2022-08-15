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
    
    return (
        <View style={styles.mainScreen}>
            <Text style={styles.messageText}>{props.question.prompt}</Text><br/>
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
        fontSize: "50px",
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

});

export default QuestionFillIn;