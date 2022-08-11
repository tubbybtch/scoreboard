import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import CheckboxChecked from "./CheckboxChecked";
import CheckboxUnchecked from "./CheckboxUnchecked";


const Checkbox = (props) => {
	const [checked,
		setChecked] = useState(false);
	
	const onSelect = (value) => {
		var newVal = !checked;
        setChecked(newVal);
		props.onPress(newVal);
    }

    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
			
				{checked ? <CheckboxChecked fill="white" /> : <CheckboxUnchecked fill="white"/>}
           </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row"
	},
 	tinyIcon: {
		width: 50,
		height: 50,
		margin: 2
	}
});

export default Checkbox;