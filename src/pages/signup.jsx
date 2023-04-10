import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import Home from "./home";
import Shopping from "./shopping";

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
            <View style = {styles.child}>
                <TouchableOpacity onPress={() => { navigate.navigate(Home) }} >
                    <Image
                        source={require('../../public/voltar.png')}
                        style = {{ width: '35px', height: '35px', marginLeft: '30px', marginTop: '25px', }}
                    />
                </TouchableOpacity>
            </View>
            <View style = {styles.container}>
                <Image
                    source={require('../../public/logo.png')}
                    style={{ width : '100px', height : '100px' }}
                />
                <Text style={styles.sujestao}>
                    Crie a sua conta
                </Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangeEmail}
                    value = {email}
                    placeholder = "E-mail"
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangeNome}
                    value = {nome}
                    placeholder = "Nome"
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangePassword}
                    value = {password}
                    placeholder = "Senha"
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {onChangeConfpassword}
                    value = {confpassword}
                    placeholder = "Confirme a senha"
                />
                <TouchableOpacity style={styles.btncadastrar} onPress={() => { navigate.navigate(Shopping)}} >
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: '18px', }}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                <Text style = {styles.textopcoes}>
                    Ou continue com
                </Text>
                <View style={styles.contas}>
                    <TouchableOpacity style={styles.btnconta}>
                        <Image
                            source={require('../../public/icon-google.svg')}
                            style={{ width: '35px', height: '35px', margin: 'auto' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnconta}>
                        <Image
                            source={require('../../public/icon-meta.svg')}
                            style={{ width: '35px', height: '35px', margin: 'auto' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnconta}>
                        <Image
                            source={require('../../public/icon-apple.svg')}
                            style={{ width: '35px', height: '35px', margin: 'auto' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: '1',
        backgroundColor: "#181A20",
    },
    container: {
        flex: '0.9',
        backgroundColor: '#181A20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    child: {
        flex: '0.1',
        backgroundColor: '#181A20',
    },
    sujestao: {
        color: 'white',
        fontSize: '30px',
        fontWeight: 'light',
        marginTop: '30px',
        marginBottom: '30px'
    },
    input: {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: '50px',
        borderRadius: '15px',
        color: 'white',
        paddingLeft: '16px',
        fontSize: '17px',
        marginBottom: '20px',
    },
    btncadastrar: {
        backgroundColor: '#94DD26',
        width: '85%',
        height: '45px',
        textAlign: 'center',
        borderRadius: '15px',
        shadowColor: '#94DD26',
        marginTop: '30px'
    },
    textopcoes: {
        color: 'white',
        fontSize: '16px',
        marginTop: '30px',
    },
    contas: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-around',
        marginTop: '15px',
    },
    btnconta: {
        width: '70px',
        height: '60px',
        borderRadius: '15px',
        backgroundColor: '#3A3A3A',
    },
})