import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import Icon from 'react-native-vector-icons/Fontisto'

import Home from "./home";
import Shopping from "./shopping";
import SimpleTopBar from "../components/simpletopbar";

export default function SignUp() {
    const navigate = useNavigation();

    const [email, onChangeEmail] = useState();
    const [nome, onChangeNome] = useState();
    const [password, onChangePassword] = useState();
    const [confpassword, onChangeConfpassword] = useState();

    function Cadastro() {
        navigate.navigate(Shopping);
    }

    return(
        <View style = {styles.main}>
            <SimpleTopBar
                page={Home}
            />
            <View style = {styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width : 100, height : 100 }}
                />
                <Text style={styles.sujestao}>
                    Crie a sua conta
                </Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangeEmail}
                    value = {email}
                    placeholder = "E-mail"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangeNome}
                    value = {nome}
                    placeholder = "Nome"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangePassword}
                    value = {password}
                    placeholder = "Senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangeConfpassword}
                    value = {confpassword}
                    placeholder = "Confirme a senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                <TouchableOpacity style={styles.btncadastrar} onPress={() => { navigate.navigate(Shopping)}} >
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: 18, }}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                <Text style = {styles.textopcoes}>
                    Ou continue com
                </Text>
                <View style={styles.contas}>
                    <TouchableOpacity style={styles.btnconta}>
                        <Image
                            source={require('../../assets/google.png')}
                            style={{ width: 35, height: 35 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnconta}>
                        <Image
                            source={require('../../assets/meta.png')}
                            style={{ width: 37, height: 25 }}
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
        backgroundColor: "#181A20",
    },
    container: {
        flex: 0.9,
        backgroundColor: '#181A20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sujestao: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'light',
        marginTop: 30,
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: 50,
        borderRadius: 15,
        color: 'white',
        paddingLeft: 16,
        fontSize: 17,
        marginBottom: 20,
    },
    btncadastrar: {
        backgroundColor: '#94DD26',
        width: '85%',
        height: 45,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: '#94DD26',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
        alignItems: 'center',
    },
})