import React, {useCallback, useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    StyleSheet,
    ActivityIndicator,
	Alert
} from 'react-native';
import {useWebSocket} from 'react-use-websocket/dist/lib/use-websocket';
import  {ACTION, DESTINATION, ORIGIN, ROLE} from "../tridget_constants.js";

const SignIn = (props) => {


	useEffect(() => {
		var packet = props.ws.lastJsonMessage;
		if (!packet) {
			return;
		}
		if (packet.action == ACTION.CONFIRM_NAME) {
			console.log(packet.payload.confirmedName, "confirmed");
			props.ws.setNameApproved(true);

		}
	},[props.lastJsonMessage]);

	const submitHandler = () => {
		if (props.teamName.trim().length == 0) {
			Alert.alert("Name must be entered...");
			
			return;
		}
		var askPacket = {
			to: DESTINATION.GAME_MASTER,
			from: ORIGIN.PLAYER,
			action: ACTION.ENTER_GAME,
			payload: {
				proposedName: props.teamName
			}
		}
		console.log(askPacket);
		props.ws.sendMessage(JSON.stringify(askPacket));
	};

    return (
        <View
            style={{
			height: window.height,
			width: window.width,
            justifyContent: "space-between",
            paddingTop: 20, 
        }}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Brainy·App</Text>
            </View>
            <View style={styles.image}>
                <Image
					color="white"
                    source={{
                    uri: require('../assets/cellphone.png')
                }}
                    style={{
                    height: 0,
                    width: 0,
                }}/>
            </View>
            <View
                style={{
                flex: 1,
                alignItems: "center"
            }}>
                <TextInput style={styles.inputBox}  onChangeText={newText => props.setTeamName(newText)}/>
                <Text style={styles.promptText}>Enter Team Name</Text>
            </View>
            <View style={styles.promptView}>
                <Button title="Submit" style="styles.submitButton" color="#444" onPress={submitHandler}/>
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
        backgroundColor: "red",
        fontSize: "40px",
		padding: 50
    },
    connectionMessageView: {
        flex: .4,
        backgroundColor: "white",
		alignItems: "center"
    },
	connectionMessage: {
		fontSize: "25px",
	},
	status: {
		flex: 3,
		backgroundColor: "grey",
	},
	statusText: {
		color: "white",
		fontSize: 25
	}
});

// const ACTION_ENTER_GAME = 0;
// const ROLE_PLAYER = 0;
// const ORIGIN_PLAYER = 2;
// const DESTINATION_GAME_MASTER = 3;

export default SignIn;