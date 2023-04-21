import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import TopBar from "../components/topbar";
import BottomBar from "../components/bottombar";
import Card from "../components/card";

import Vegetables from './vegetables';
import Salads from './salads';
import Fruits from "./fruits";
import Sauces from './sauces';
import Fish from './fish';
import Cultivation from './cultivation';
import Plants from './plants';
import Kitchen from './kitchen';


export default function Shopping() {
    const navigate = useNavigation();
    
    const [pesquisa, onChangePesquisa] = useState();
    
    return (
        <View style={styles.main}>
            <TopBar/>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePesquisa}
                    value={pesquisa}
                    placeholder="O que você está procurando?"
                />
                <View style={styles.box}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '25px', marginBottom: '15px' }}>
                        Categorias:
                    </Text>
                    <View style={styles.child}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Vegetables) }}
                        >
                            <Image
                                source = {require('../../assets/icons/legume.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                Legumes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Salads) }}
                        >
                            <Image
                                source = {require('../../assets/icons/salada.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                Saladas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Fruits) }}
                        >
                            <Image
                                source = {require('../../assets/icons/fruta.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                Frutas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Sauces) }}
                        >
                            <Image
                                source = {require('../../assets/icons/molho.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                Molhos
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.child}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Fish) }}
                        >
                            <Image
                                source = {require('../../assets/icons/peixe.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                Peixes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Cultivation) }}
                        >
                            <Image
                                source = {require('../../assets/icons/agricultura.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                cultivo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Plants) }}
                        >
                            <Image
                                source = {require('../../assets/icons/planta.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                Plantas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Kitchen) }}
                        >
                            <Image
                                source = {require('../../assets/icons/cozinha.svg')}
                                style = {{ width: '35px', height: '35px', marginTop: '5px' }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: '12px', marginTop: '2px' }}>
                                Cozinha
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ border: '1px solid #fff', width: '100%' }}>
                    <Card
                        name = 'Alface Hidropônico'
                        evaluation = '4.0'
                        price = '20.00'
                        image = 'https://hidrogood.com.br/wp-content/uploads/2019/08/DSC03564-scaled.jpg'
                    />
                </View>
            </View>
            <BottomBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: '1',
        backgroundColor: '#000',
    },
    container: {
        flex: '0.8',
        backgroundColor: '#181A20',
    },
    input: {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: '60px',
        borderRadius: '15px',
        color: '#838383',
        paddingLeft: '16px',
        fontSize: '17px',
        margin: 'auto',
    },
    box: {
        width: '85%',
        margin: 'auto',
    },
    child: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '18px',
    },
    btn: {
        width: '75px',
        height: '65px',
        borderRadius: '15px',
        alignItems: 'center',
        backgroundColor: '#3A3A3A',
    },
})