import React from 'react';
import {
    View,
	Text,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import RadioButtons from './NativeComponents/RadioButtons.js';

const Waiting = (props) => {
    return (
        <View style={styles.mainScreen}>
			<ActivityIndicator size="large" color="#FFFFFF"/><br/>
			<Text style={styles.messageText}>{props.message}</Text>
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
    },
});

export default Waiting;