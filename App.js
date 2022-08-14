// main app
import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, useWindowDimensions} from 'react-native';
import {useWebSocket} from 'react-use-websocket/dist/lib/use-websocket.js';

import Welcome from "./components/Welcome.js";
import NameReview from './components/NameReview.js';
import Waiting from './components/Waiting.js';
import Question from "./components/Questions/Question.js";
import Grade from './components/Grades/Grade.js';
import Scoresheet from './components/Scoresheets/Scoresheet.js';

import {ACTION, DESTINATION, ORIGIN, ROLE, QUESTION_TYPE} from './tridget_constants.js';
import {SCOREBOARD} from "./scoreboard_constants";
import AnswerSubmitted from './components/AnswerSubmitted.js';

const socketUrl = "ws://192.168.0.167:10441";

const App = () => {
    const [connected,
        setConnected] = useState(false);
	const [game,
		setGame] = useState({});
 	const [gameState,
		setGameState] = useState(SCOREBOARD.WAITING);
	const [displayQuestion,
		setDisplayQuestion] = useState(false);
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
            //console.log('opened');
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
   
            if (packetIn.action == ACTION.DISPLAY_WELCOME) {
                setGame(packetIn.payload);
				setGameState(SCOREBOARD.WELCOME);
            } else if (packetIn.action == ACTION.DENY_NAME) {
				console.log("name deny");
                setTeamName("");
				setGameState(PLAYER_STATES.ENTERING_NAME);
            } else if (packetIn.action == ACTION.SEND_QUESTION) {
				setQuestion(packetIn.payload);
				setGameState(PLAYER_STATES.ANSWERING_QUESTION);
			} else if (packetIn.action == ACTION.GRADE_SENT) {
				setGrade(packetIn.payload);
				setGameState(PLAYER_STATES.RECIEVE_GRADE);
			} else if (packetIn.action == ACTION.SEND_MESSAGE) {
				setLastMessage(packetIn.payload.message);
			} else if (packetIn.action == ACTION.SEND_TEAM_SCORESHEET) {
				setScoresheetData(packetIn.payload.scoresheet);
				setGameState(PLAYER_STATES.RECEIVE_SCORESHEET);
			}
        }
    }, [ws.lastJsonMessage]);

	const submitAnswer = (answer, teamName, elapsed) => {
		// code to submit answer to game master
		var packet = {
			to: DESTINATION.GAME_MASTER,
			from: ORIGIN.PLAYER,
			type: ACTION.SEND_ANSWER,
			payload: {
				teamName: teamName,
				answer: answer,
				elapsedTime: elapsed
			}
		}
		ws.sendJsonMessage(packet);
		//console.log("Answer Sent:",answer);
		setGameState(PLAYER_STATES.ANSWER_SUBMITTED);
	}


    var content = <Text></Text>
	//console.log(gameState);
	 if (gameState == SCOREBOARD.ANSWER_SUBMITTED) {
		content = <AnswerSubmitted message="Waiting..."/>
	} else if (gameState == SCOREBOARD.WELCOME) {
		content = <Welcome game={game.location}/>
	}else if (gameState == SCOREBOARD.ANSWERING_QUESTION) {
		content = <Question question={question} teamName={teamName} socket={ws} submitAnswer={submitAnswer}/>
	} else if (gameState == SCOREBOARD.RECIEVE_GRADE) {
		content = <Grade grade={grade} question={question} teamName={teamName} socket={ws} />
	} else if (gameState == SCOREBOARD.RECEIVE_SCORESHEET) {
		content = <Scoresheet scoresheet={scoresheetData} />

	}

    return (
        <View style={styles.mainScreen}>
            <View style={styles.header}>
                <Text style={styles.nameText}>Bar Name</Text>
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