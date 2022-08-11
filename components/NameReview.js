import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';


const NameReview = (props) => {
    return (
        <View
            style={{
            height: window.height,
            width: window.width,
            justifyContent: "space-between",
            paddingTop: 20
        }}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Brainy·App</Text>
            </View>
            <View
                style={{
                flex: 1,
                alignItems: "center",
				paddingTop: 100,
				paddingBottom: 100
            }}>
                <Text style={styles.promptText}>Name Being Reviewed</Text>
				
            </View>
			<ActivityIndicator size="large" color="white"/>
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
        fontSize: "30px",
        fontWeight: "bold"
    },
    image: {
        flex: 0,
        alignItems: "center",
        padding: 25
    },
    promptView: {
        flex: 1,
        paddingTop: 75
    },
    promptText: {
        color: "white",
        fontSize: "25px",
        fontWeight: "bold"
    },
    inputBox: {
        backgroundColor: "white",
        fontSize: "30px",
        fontWeight: "bold",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: "80%",
        height: "50px"
    },
    submitButton: {
        fontSize: "40px",
        padding: 50
    },
    connectionMessageView: {
        flex: .4,
        backgroundColor: "white",
        alignItems: "center"
    },
    connectionMessage: {
        fontSize: "25px"
    },
    status: {
        flex: 3,
        backgroundColor: "grey"
    },
    statusText: {
        color: "white",
        fontSize: 25
    },
    submitButtonView: {
        paddingTop: 70
    }
});

// const ACTION_ENTER_GAME = 0; const ROLE_PLAYER = 0; const ORIGIN_PLAYER = 2;
// const DESTINATION_GAME_MASTER = 3;

export default NameReview;