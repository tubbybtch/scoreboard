import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {DEFAULT_OPTIONS} from 'react-use-websocket/dist/lib/constants';
import RadioButton from './RadioButton';
import {v4 as uuid} from 'uuid';


const RadioButtons = (props) => {
    console.log(props);
    const [answer,
        setAnswer] = useState(null);

    const onSelect = (value) => {
        setAnswer(value);
    }

    return (
        <View style={styles.mainScreen}>
            <View style={{flexDirection: props.layout}}>
                {props
                    .options
                    .map((opt) => {
                        return <RadioButton
                            text={opt.text}
                            value={opt.value}
                            selected={answer == opt.value ? true : false}
                            onSelect={setAnswer}
							key={uuid()}/>
                    })}

            </View >
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    messageText: {
        color: "white",
        fontSize: "30px",
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: "row"
    },
    button: {
        height: 50,
        width: 150,
        margin: 10,
        backgroundColor: "white"
    },
    buttonText: {
        color: "grey",
        fontSize: "30px",
        fontWeight: "bold",
        justifyContent: "center"
    }
});

export default RadioButtons;