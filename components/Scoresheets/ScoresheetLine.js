import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';

const ScoresheetLine = (props) => {
    console.log(props);

    return (
        <View style={styles.mainScreen}>
            <View style={styles.rowStyle}>
                <View style={styles.column1}>
                    <Text style={styles.messageText}>{props.number}</Text>
                </View>
                <View style={styles.column2}>
                    <Text style={styles.messageText}>{props.score
                            ? props.score.answer
                            : "N/A"}</Text>
                </View>
                <View style={styles.column3}>
                    <Text style={styles.messageText}>{props.score
                            ? props.score.points
                            : "N/A"}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {

	},
    rowStyle: {
        flex: 1,
        flexDirection: "row",
		height: 15,
    },
    column1: {
        flex: 1,
        height: 50
    },
    column2: {
        flex: 4
    },
    column3: {
        flex: 1
    },
    messageText: {
        color: "white",
        fontSize: "20px"
    }
});

export default ScoresheetLine;