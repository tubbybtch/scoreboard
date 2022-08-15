import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import QuestionMultiSelectItem from './QuestionMultiSelectItem';

const QuestionMultiSelect = (props) => {
    console.log(props);

    var opts = [];
    for (var ix=0; ix < props.question.choices.length; ix++) {

        opts.push(<QuestionMultiSelectItem text={props.question.choices[ix]} index={ix} key={ix} onChange={()=>{}}/>);
    }

    return (
        <View style={styles.mainScreen}>
			<View>
            <Text style={styles.messageText}>{props.question.prompt}</Text><br/>
			</View>
			<View style={styles.columnView}>
				{opts}
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    messageText: {
        color: "white",
        fontSize: "50px",
        fontWeight: "bold",
        marginLeft: 15
    },
    buttonContainer: {
        marginTop:40,
    },
	columnView: {
		flexWrap: "wrap"
	},
	columnContent: {
		flex: "flex 1 1 160px"
	}
});

export default QuestionMultiSelect;