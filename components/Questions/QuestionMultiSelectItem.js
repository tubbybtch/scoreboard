import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import Checkbox from '../NativeComponents/Checkbox';

const QuestionMultiSelectItem = (props) => {
	//console.log(props);
    const [answer,
        setAnswer] = useState(null);

	const pressCheckbox = (val) => {
		setAnswer(val);
		props.onChange(props.index, val);
	}

    return (
        <View style={styles.mainScreen}>
			<Checkbox onPress={pressCheckbox}/><Text style={styles.text}> {props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
		flexDirection: "row",
        justifyContent: "left",
		marginBottom: 5,
    },
	text: {
        color: "white",
        fontSize: "20px",
        marginLeft: 15
    },
});

export default QuestionMultiSelectItem;