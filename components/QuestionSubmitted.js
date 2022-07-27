import React from 'react';
import {
    View,
	Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

const QuestionSubmitted = (props) => {
    return (
        <View style={styles.mainScreen}>
			<Text style={styles.messageText}>Question Submitted</Text>
			<ActivityIndicator size="large" color="#FFFFFF"/><br/>
			<Text style={styles.messageText}>Waiting...</Text>
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

export default QuestionSubmitted;