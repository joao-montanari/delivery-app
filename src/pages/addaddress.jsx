import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';
import { StatusBar } from "expo-status-bar";

import SimpleTopBar from "../components/simpletopbar";
import Address from "./address";

export default function AddAddress() {
    const navigate = useNavigation();

    const [country, setCountry] = useState()
    const [uf, setUf] = useState()
    const [city, setCity] = useState()
    const [neighborhood, setNeighborhood] = useState()
    const [street, setStreet] = useState()
    const [number, setNumber] = useState()
    const [cep, setCep] = useState()

    return (
        <View style={styles.main}>
            <SimpleTopBar
                page={Address}
                title='Adicionar endereço'
            />
            <View style={styles.container}>
                <Icon
                    name="earth"
                    color="#75F94C"
                    size={90}
                    style={{ marginBottom: 15, marginTop: 15 }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCountry}
                    value={country}
                    placeholder="País"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setUf}
                    value={uf}
                    placeholder="Unidade Federal"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCity}
                    value={city}
                    placeholder="Cidade"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNeighborhood}
                    value={neighborhood}
                    placeholder="Bairro"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setStreet}
                    value={street}
                    placeholder="Rua"
                    placeholderTextColor='#A9A9A9'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    value={number}
                    placeholder="Número"
                    placeholderTextColor='#A9A9A9'
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: 18, }}>
                        Salvar endereço
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
        marginTop: 20,
        color: 'white',
    },
    btn: {
        backgroundColor: '#94DD26',
        width: '85%',
        height: 50,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: '#94DD26',
        marginTop: 60,
        marginHorizontal : 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
})