import React from 'react';
import {
    View,
	Text,
    StyleSheet,
    ActivityIndicator,
	Image
} from 'react-native';

const Grade = (props) => {
	console.log(props);
    return (
        <View style={styles.mainScreen}>
			<Text style={styles.messageText}>Correct Answer: {props.grade.correctAnswer}</Text>
			<Text style={styles.messageText}>Your Answer: {props.grade.teamAnswer}</Text>
			<Text style={styles.messageText}>Points: {props.grade.points}</Text>		
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
    }
});

export default Grade;