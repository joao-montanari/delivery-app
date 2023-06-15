import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SimpleTopBar from "../components/simpletopbar";
import { useState } from "react";

export default function Password() {
    const navigate = useNavigation();
    const [password, setPassword] = useState()
    const [confirmPassword, setCofirmPassword] = useState()

    return (
        <View style={styles.main}>
            <SimpleTopBar
                page={'User'}
                title="Alterar senha"
            />
            <View style={styles.container}>
                <Icon
                    name="key"
                    color="#94DD26"
                    size={120}
                    style={{ marginTop: 80, marginBottom: 80 }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Nova senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCofirmPassword}
                    value={confirmPassword}
                    placeholder="Confirmar nova senha"
                    secureTextEntry={true}
                    placeholderTextColor='#A9A9A9'
                />
                <TouchableOpacity style={styles.btn} >
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: 18, }}>
                        Salvar nova senha
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#181A20',
    },
    container: {
        flex: 0.9,
        backgroundColor: '#181A20',
        alignItems: 'center',
    },
    input : {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: 50,
        borderRadius: 15,
        paddingLeft: 16,
        fontSize: 17,
        marginHorizontal: 'auto',
        marginTop: 30,
        color: 'white',
    },
    btn: {
        backgroundColor: '#94DD26',
        width: '85%',
        height: 50,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: '#94DD26',
        marginHorizontal : 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 130,
    },
})