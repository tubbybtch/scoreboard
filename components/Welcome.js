import React, {useCallback, useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const Welcome = (props) => {
	console.log(props);


    return (
        <View
            style={styles.mainScreen}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{props.game.location}</Text>
			</View>
			<View style={styles.title}>
                <Text style={styles.titleText}>{props.game.date}</Text>
			</View>
			<View style={styles.title}>
                <Text style={styles.titleText}>{props.game.time}</Text>
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 20
    },
    title: {
        flex: .2,
        alignItems: "center"
    },
    titleText: {
        flex: 1,
        color: "white",
        fontSize: "40px",
        fontWeight: "bold"
    },

});

export default Welcome;