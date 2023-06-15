import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

import SimpleTopBar from "../components/simpletopbar";
import { Cadastrar } from "../services/requestsFireBase";
import Alert from "../components/alert";
import { changeData } from "../utils/common";

export default function SignUp() {
    const navigate = useNavigation();
    const [error, setError] = useState(false);
    const [mensagemError, setMessagemError] = useState('');
    const [data, setData] = useState({email: '', name: '', password: '', confpassword: ''})

    async function realizarCadastro() {
        if (data.email === '' || data.nome === '' || data.password === '' || data.confpassword === '') {
            setError(true);
            setMessagemError('Erro no cadastro, verifique se todos os campos foram preenchidos.');
        } else if (data.password != data.confpassword) {
            setError(true);
            setMessagemError("Erro de cadastro, a senha informada não é idêntica a senha do campo 'confirme a senha'.")
        } else {
            const result = await Cadastrar(data.email, data.password, data.confpassword);
            if (result === 'sucesso') {
                setData({email: '', name: '', password: '', confpassword: ''})
                setError(false);
                navigate.replace('Shopping');
            } else {
                setError(true);
                setMessagemError(result);
            }
        }
    }

    return(
        <View style = {styles.main}>
            <SimpleTopBar
                page={'Home'}
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
                    onChangeText = {value => changeData('email', value, data, setData)}
                    value = {data.email}
                    placeholder = "E-mail"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {value => changeData('name', value, data, setData)}
                    value = {data.name}
                    placeholder = "Nome"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {value => changeData('password', value, data, setData)}
                    value = {data.password}
                    placeholder = "Senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style = {styles.input}
                    onChangeText = {value => changeData('confpassword', value, data, setData)}
                    value = {data.confpassword}
                    placeholder = "Confirme a senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />

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
                <Alert
                    mensagem={mensagemError}
                    error={error}
                    setError={setError}
                    timer={1500}
                />
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