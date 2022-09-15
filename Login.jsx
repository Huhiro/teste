import React from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import { TextInput, Text, Button, IconButton , Stack } from "@react-native-material/core";
import { Icon } from "@react-native-material/core";

export default function Login({ navigation }) {

    return (
        <>
            <View style={styles.container}>
                {/* <Image style={styles.tinyLogo} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/> */}
                <StatusBar
                    animated={true}
                    backgroundColor="black" />
                <ImageBackground style={styles.tinyLogo} source={require('./assets/uisa_safety.png')} />
                <Text style={styles.text} variant="subtitle2">Bem vindo ao UISA Safety, seu aplicativo de controle de EPIs</Text>
                <Button style={styles.login} tintColor="white" color="#ff7f27" title="Entrar" onPress={() => navigation.navigate('Main')} />
                <Text style={styles.remember} color="#FF7F27" onPress={() => navigation.navigate('RememberPass')} variant="subtitle2">Esqueceu a senha?</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 250,
        height: 40,

    },
    login: {
        marginTop: 25
    },
    text: {
        marginTop: 25,
        color: '#4e4e63',
        width: 280,
        textAlign: 'center'
    },
    remember: {
        marginTop: 25,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }

});