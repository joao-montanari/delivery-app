import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/Fontisto";

import Home from "./home";
import Shopping from "./shopping";
import SimpleTopBar from "../components/simpletopbar";

export default function SignIn() {
    const navigate = useNavigation();

    const [password, onChangePassword] = useState();
    const [email, onChangeEmail] = useState();

    return(
        <View style={styles.main}>
            <SimpleTopBar
                page={Home}
            />
            <View style={styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: 130, height: 130 }}
                />
                <Text style={styles.sujestao}>
                    Entre na sua conta
                </Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangeEmail}
                    value = {email}
                    placeholder = "E-mail"
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangePassword}
                    value = {password}
                    placeholder = "Senha"
                />
                <TouchableOpacity 
                    style={styles.btnentrar} 
                    onPress={() => { navigate.navigate(Shopping) }}
                >
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: 18, }}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <Text style = {styles.textopcoes}>
                    Ou continue com
                </Text>
                <View style={styles.contas}>
                    <TouchableOpacity style={styles.btnconta}>
                        <Icon
                            name="google"
                            size={35}
                            color="#E24439"
                            style={{ margin: 'auto' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnconta}>
                        <Icon
                            name="facebook"
                            size={35}
                            color="#0083FC"
                            style={{ margin: 'auto' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnconta}>
                        <Icon
                            name="apple"
                            size={35}
                            color="gray"
                            style={{ margin: 'auto' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#000",
    },
    container: {
        flex: '0.90',
        backgroundColor: "#181A20",
        alignItems: 'center',
        justifyContent: 'center',
    },
    sujestao: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'light',
        marginTop: 40,
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: 40,
        borderRadius: 15,
        color: 'white',
        paddingLeft: 16,
        fontSize: 17,
        marginBottom: 20,
    },
    btnentrar: {
        backgroundColor: '#94DD26',
        width: '85%',
        height: 45,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: '#94DD26',
        marginTop: 50,
    },
    textopcoes: {
        color: 'white',
        fontSize: 16,
        marginTop: 30,
    },
    contas: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    btnconta: {
        width: 70,
        height: 60,
        borderRadius: 15,
        backgroundColor: '#3A3A3A',
    },
})