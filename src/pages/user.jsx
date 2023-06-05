import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import Icon from 'react-native-vector-icons/EvilIcons'

import SimpleTopBar from '../components/simpletopbar';
import Shopping from './shopping';
import Home from './home';

export default function User() {
    const navigate = useNavigation();
    const [name, setName] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');

    function salvar() {
        console.log(email);
    }

    return (
        <View style={styles.main}>
            <SimpleTopBar
                page={Shopping}
                title={'Seu Perfil'}
            />
            <View style={styles.container}>
                {/* <TouchableOpacity style={styles.btnimage}>
                    <Image
                        source={require('../../assets/icons/userimg.svg')}
                        style={{ width: 130, height: 130 }}
                    />
                    <Image
                        source={require('../../assets/icons/greenpen.svg')}
                        style={styles.pen}
                    />
                </TouchableOpacity> */}
                <Icon
                    name='user'
                    size={180}
                    color='white'
                    style={{ marginBottom: 20, marginTop: 20 }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Nome"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNascimento}
                    value={nascimento}
                    placeholder="Data de nascimento"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="E-mail"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCpf}
                    value={cpf}
                    placeholder="CPF"
                    placeholderTextColor='#A9A9A9'
                />
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btnopc}>
                        <Text style={{ color: '#94DD26', margin: 'auto', fontSize: 20, fontWeight: '500' }}>
                            Senha
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnopc}>
                        <Text style={{ color: '#94DD26', margin: 'auto', fontSize: 20, fontWeight: '500' }}>
                            Endereços
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnsalvar} onPress={salvar} >
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: 18, }}>
                        Salvar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnlogout} onPress={() => navigate.navigate(Home)}>
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: '500', fontSize: 16, }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: "#000",
    },
    container : {
        flex: 0.9,
        backgroundColor: '#181A20',
        alignItems: 'center',
    },
    // btnimage : {
    //     position: 'relative',
    //     width: 130,
    //     marginHorizontal: 'auto',
    //     marginTop: 30,
    //     marginBottom: 30,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // pen : {
    //     position: 'absolute',
    //     width: 35,
    //     height: 35,
    //     bottom: 0,
    //     right: 0,
    // },
    input : {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: 50,
        borderRadius: 15,
        paddingLeft: 16,
        fontSize: 17,
        marginHorizontal: 'auto',
        marginTop: 20,
    },
    btns : {
        width: '85%',
        marginTop: 30,
        marginHorizontal: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnopc : {
        width: 140,
        height: 60,
        borderWidth: 3,
        borderColor: '#94DD26',
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnsalvar: {
        backgroundColor: '#94DD26',
        width: '85%',
        height: 50,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: '#94DD26',
        marginTop: 30,
        marginHorizontal : 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnlogout: {
        borderWidth: 3,
        borderColor: '#3A3A3A',
        width: '85%',
        height: 50,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: '#94DD26',
        marginTop: 20,
        marginHorizontal : 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
})