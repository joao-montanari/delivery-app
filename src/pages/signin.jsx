import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/Fontisto";

import SimpleTopBar from "../components/simpletopbar";
import { Logar } from "../services/requestsFireBase";
import Alert from "../components/alert";

export default function SignIn() {
    const navigate = useNavigation();
    const [error, setError] = useState(false);
    const [mensagemError, setMessagemError] = useState('');
    const [data, setData] = useState({email: '', password: ''})

    const changeData = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }

    async function realizarLogin() {
        if (data.email === '' || data.password === '') {
            setError(true);
            setMessagemError('Erro ao logar. um ou mais campos não foram preenchidos.');
        } else {
            const result = await Logar(data.email, data.password);
            if (result === 'sucesso') {
                setData({email: '', password: ''})
                setError(false);
                navigate.replace('Shopping');
            } else {
                setError(true);
                setMessagemError('Email ou senha não conferem.');
            }
        }
    }

    return(
        <View style={styles.main}>
            <SimpleTopBar
                page={'Home'}
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
                    onChangeText = {value => changeData('email', value)}
                    value = {data.email}
                    placeholder = "E-mail"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {value => changeData('password', value)}
                    value = {data.password}
                    placeholder = "Senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                <TouchableOpacity 
                    style={styles.btnentrar} 
                    onPress={() => realizarLogin()}
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
                <Alert
                    mensagem={mensagemError}
                    error={error}
                    setError={setError}
                    time={1500}
                />
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
        flex: 0.9,
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
        color: '#fff',
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