import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import SignIn from "./components/SignIn.js";

const styles = StyleSheet.create({
    mainScreen: {
        backgroundColor: "darkorange"
    }
});

const App = () => {
    return (
        <ScrollView style={styles.mainScreen}>
			<SignIn />
         </ScrollView>
    );
}

export default App;