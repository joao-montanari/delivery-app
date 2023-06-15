import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import Icon from 'react-native-vector-icons/Fontisto';

import Home from "./home";
import Shopping from "./shopping";
import SimpleTopBar from "../components/simpletopbar";
import Cadastrar from "../services/requestsFireBase";

export default function SignUp() {
    const navigate = useNavigation();
    const [error, setError] = useState(false);

    const [email, onChangeEmail] = useState('');
    const [nome, onChangeNome] = useState('');
    const [password, onChangePassword] = useState('');
    const [confpassword, onChangeConfpassword] = useState('');

    async function realizarCadastro() {
        if (email === '' || nome === '' || password === '' || confpassword === '') {
            setError(true);
        } else if (password != confpassword) {
            setError(true);
        } else {
            const result = await Cadastrar(email, password, confpassword);
            onChangeEmail('');
            onChangeNome('');
            onChangePassword('');
            onChangeConfpassword('');
            setError(false);
        }
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
                    onChangeText = {() => onChangeEmail(email)}
                    value = {email}
                    placeholder = "E-mail"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {() => onChangeNome(nome)}
                    value = {nome}
                    placeholder = "Nome"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {() => onChangePassword(password)}
                    value = {password}
                    placeholder = "Senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {() => onChangeConfpassword(confpassword)}
                    value = {confpassword}
                    placeholder = "Confirme a senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                
                {
                    (error ?
                        <Text style={{ textAlign: 'center', width: '85%', color: '#D80300', fontWeight: '500'}}>
                            Erro no cadastro, verifique se todos os campos 
                            foram preenchidos ou se esse email já foi utilizado.
                        </Text>
                    :
                        null
                    )
                }

                <TouchableOpacity style={styles.btncadastrar} onPress={() => realizarCadastro()} >
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
        marginTop: 20,
        marginBottom: 20,
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