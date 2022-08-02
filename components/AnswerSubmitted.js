import React from 'react';
import {
    View,
	Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

const AnswerSubmitted = (props) => {
	console.log(props);
    return (
        <View style={styles.mainScreen}>
			<Text style={styles.messageText}>Answer Submitted</Text>
			<ActivityIndicator size="large" color="#FFFFFF"/><br/>
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

export default AnswerSubmitted;