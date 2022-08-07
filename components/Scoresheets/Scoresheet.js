import React from 'react';
import {
    View,
	Text,
    StyleSheet,
    ActivityIndicator,
	ScrollView
} from 'react-native';
import ScoresheetLine from './ScoresheetLine';

const Scoresheet = (props) => {
	console.log(props);

	var scores = [];
	for (var ix=1; ix < props.scoresheet.length; ix++) {
		var score = props.scoresheet[ix];
		console.log(score);

		scores.push(<ScoresheetLine number={ix} score={score} key={ix}/>);
	}

    return (
        <View style={styles.mainScreen}>
			<Text style={styles.messageText}>Scoresheet</Text>
			<View style={styles.scoreView}></View>
			{scores}
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
		flexDirection: "column",
		alignItems: "left",
		justifyContent: "left",
		width: "100%"
	},
	 scoreView: {
		alignItems: "left",
		justifyContent: "left"
	 },
    messageText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold",
    }
});

export default Scoresheet;