import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuestionTF = (props) => {
    return (
        <View style={styles.mainScreen}>
            <Text style={styles.messageText}>{props.question.prompt}<br/></Text>
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
        fontWeight: "bolder",
        marginLeft: 20
    },
});

export default QuestionTF;