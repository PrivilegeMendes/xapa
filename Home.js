import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Login() {
    return (
        <View style={styles.main}>
            <Text style={styles.h1}>Welcome to Homepage</Text>
            {/* <TextInput style={styles.input} placeholder="username/email" />
            <TextInput style={styles.input} placeholder="password" />
            <Button style={styles.button} title='Login' /> */}
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "black",
    },
    // text: {
    //     color: 'white',
    //     width: '100%',
    // },
    // input: {
    //     borderColor: 'white',
    //     borderWidth: 1,
    //     height: 40,
    //     paddingLeft: 8,
    //     borderRadius: 5,
    //     color: 'white',
    //     width: "80%",
    //     maxWidth: 300,
    //     marginBottom: 20,
    // },
    h1: {
        color: 'white',
        fontSize: 30,
        marginTop: 40,
        marginBottom: 100,
    },
    // button: {
    //     // width: "80%",
    //     // maxWidth: 300,
    //     padding: 40,
    // }
});
