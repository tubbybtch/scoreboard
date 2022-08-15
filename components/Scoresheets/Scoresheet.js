import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import ScoresheetLine from './ScoresheetLine';

const Scoresheet = (props) => {
    console.log(props);

    // var scores = []; var totalScore = 0; for (var ix = 1; ix <
    // props.scoresheet.length; ix++) {     var score = props.scoresheet[ix]; 	if
    // (score !== null) { 		totalScore += score.points;
    // 		scores.push(<ScoresheetLine number={ix} score={score} key={ix}/>); 	}
    // //console.log(score); }

    return (
        <View style={styles.mainScreen}>
            <View style={styles.scoresheetTitle}>
                <Text style={styles.scoresheetText}>Scoresheet</Text>
            </View>
            <View style={styles.titleView}>
                {props
                    .scoresheet
                    .headers
                    .map((title, ix) => {
                        if (ix == 0) {
                            return <View style={styles.teamName} key={ix}>
                                <Text style={styles.titleText}>{title}</Text>
                            </View>
                        } else {
                            return <View style={styles.title} key={ix}>
                                <Text style={styles.titleText}>{title}</Text>
                            </View>
                        }
                    })}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        alignItems: "center"
    },
	scoresheetTitle: {
		marginBottom: 100,

	},
	scoresheetText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold"
    },
    titleView: {
        flexDirection: "row",

    },
    teamName: {
        width: 150,
		borderBottom: "3px solid white"
    },
	titleText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white"
	},
    title: {
        flex: 1,
        paddingLeft: 25,
		borderBottom: "3px white solid"
    },

});

export default Scoresheet;