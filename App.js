import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, useWindowDimensions} from 'react-native';
import {useWebSocket} from 'react-use-websocket/dist/lib/use-websocket.js';

import SignIn from "./components/SignIn.js";
import Waiting from './components/Waiting.js';
import Question from "./components/Questions/Question.js";
import Grade from './components/Grades/Grade.js';
import Scoresheet from './components/Scoresheets/Scoresheet.js';

import {ACTION, DESTINATION, ORIGIN, ROLE, QUESTION_TYPE} from './tridget_constants.js';
//import {ACTION, DESTINATION, ORIGIN, ROLE, QUESTION_TYPE} from 'https://github.com/tubbybtch/tridget2_constants/blob/48d97c4438aae2b451e0381a75d59f81af9d9236/tridget_constants.js';

const socketUrl = "ws://192.168.0.167:10437";

const App = () => {
    const [connected,
        setConnected] = useState(false);
    const [teamName,
        setTeamName] = useState("Brainiacs"); 
    const [nameApproved,
        setNameApproved] = useState(false);
    const [waiting,
        setWaiting] = useState(true);
	const [displayQuestion,
		setDisplayQuestion] = useState(false);
	const [displayGrade,
		setDisplayGrade] = useState(false);
	const [displayScoresheet,
		setDisplayScoresheet] = useState(false);
	const [question,
		setQuestion] = useState({});
	const [grade,
		setGrade] = useState({});
	const [scoresheetData,
		setScoresheetData] = useState({});
	const [lastMessage,
			setLastMessage] = useState("");

    const ws = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('opened');
            setConnected(true)
        },
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true
    });
    const window = useWindowDimensions();
    //console.log(ws);

    useEffect(() => {
        // will execute on every new packet received
		console.log(ws.lastJsonMessage);
        if (ws.lastJsonMessage) {
            var packetIn = ws.lastJsonMessage;
			setWaiting(false);
			setDisplayGrade(false);
			setDisplayQuestion(false);
			setDisplayScoresheet(false);
            console.log(packetIn);
            if (packetIn.action == ACTION.CONFIRM_NAME) {
                setTeamName(packetIn.payload.confirmedName);
                setNameApproved(true);
                setWaiting(true);
            } else if (packetIn.action == ACTION.SEND_QUESTION) {
				setWaiting(false);
				setDisplayQuestion(true);
				setQuestion(packetIn.payload);
			} else if (packetIn.action == ACTION.GRADE_SENT) {
				setDisplayGrade(true);
				setGrade(packetIn.payload);
			} else if (packetIn.action == ACTION.SEND_MESSAGE) {
				setLastMessage(packetIn.payload.message);
			} else if (packetIn.action == ACTION.SEND_TEAM_SCORESHEET) {
				setScoresheetData(packetIn.payload.scoresheet);
				setDisplayScoresheet(true);
			}
        }
    }, [ws.lastJsonMessage]);

	const submitAnswer = (answer, teamName) => {
		// code to submit answer to game master
		var packet = {
			to: DESTINATION.GAME_MASTER,
			from: ORIGIN.PLAYER,
			type: ACTION.SEND_ANSWER,
			payload: {
				teamName: teamName,
				answer: answer
			}
		}
		ws.sendJsonMessage(packet);
		setDisplayQuestion(false);
		console.log("Answer Sent:",answer);
	}


    var content = <Text></Text>
    if (!nameApproved) {
        content = <SignIn
            ws={ws}
            setTeamName={setTeamName}
            teamName={teamName}
            setNameApproved={setNameApproved}/>
    } else if (waiting) {
		content = <Waiting message="Waiting..."/>
	} else if (displayQuestion) {
		content = <Question question={question} teamName={teamName} socket={ws} submitAnswer={submitAnswer}/>
	} else if (displayGrade) {
		content = <Grade grade={grade} teamName={teamName} socket={ws} />
	} else if (displayScoresheet) {
		content = <Scoresheet scoresheet={scoresheetData} />

	}

    return (
        <View style={styles.mainScreen}>
            <View style={styles.header}>
                {nameApproved
                    ? <Text style={styles.nameText}>{teamName}</Text>
                    : null}
            </View>
            <View style={styles.content}>
				{content}
            </View>
			<View style={styles.status}>
				<Text style={styles.statusText}>{lastMessage}</Text>
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "darkorange"
    },
    header: {
        flex: 1,
        alignItems: "center"
    },
    content: {
        flex: 10,
        alignItems: "center"
    },
    status: {
        flex: 1,
        backgroundColor: "#444"
    },
    statusText: {
        color: "white",
        fontSize: 24
    },
    nameText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default App;