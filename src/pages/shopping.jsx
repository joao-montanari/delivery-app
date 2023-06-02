import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import TopBar from "../components/topbar";
import BottomBar from "../components/bottombar";
import Card from "../components/card";

import ProductDatail from "./productdetail";

import Vegetables from './categories/vegetables';
import Salads from './categories/salads';
import Fruits from "./categories/fruits";
import Sauces from './categories/sauces';
import Fish from './categories/fish';
import Cultivation from './categories/cultivation';
import Plants from './categories/plants';
import Kitchen from './categories/kitchen';


export default function Shopping() {
    const navigate = useNavigation();

    const Produtos = [
        {
            id : '1',
            name : 'Alface Hidropônico',
            evaluation : '4.0',
            price : 20.01,
            image : 'https://hidrogood.com.br/wp-content/uploads/2019/08/DSC03564-scaled.jpg',
        },
        {
            id : '2',
            name : 'Coco',
            evaluation : '4.3',
            price : 30.01,
            image : 'https://conteudo.imguol.com.br/c/entretenimento/f3/2021/07/30/coco-1627655478157_v2_3x4.jpg',
        },
        {
            id : '3',
            name : 'Arroz Integral',
            evaluation : '3.0',
            price : 15.01,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : '4',
            name : 'Ervilha',
            evaluation : '3.8',
            price : 10.01,
            image : 'https://static.itdg.com.br/images/auto-auto/b2c52382f3b05766792fb9d4f2326e93/shutterstock-287797673.jpg',
        },
        {
            id : '5',
            name : 'Salmão',
            evaluation : '4.9',
            price : 65.01,
            image : 'https://st4.depositphotos.com/1020804/29022/i/600/depositphotos_290225834-stock-photo-fresh-salmon-fillets-on-black.jpg',
        },
    ]
    
    const [pesquisa, onChangePesquisa] = useState();

    const renderCard = ({ item }) => (
        <Card
            name = {item.name}
            evaluation = {item.evaluation}
            price = {item.price}
            image = {item.image}
        />
    );
    
    return (
        <View style={styles.main}>
            <TopBar/>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={() => {onChangePesquisa(pesquisa)}}
                    value={pesquisa}
                    placeholder="O que você está procurando?"
                />
                <View style={styles.box}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginBottom: 5 }}>
                        Categorias:
                    </Text>
                    <View style={styles.child}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(ProductDatail, ) }}
                        >
                            <Image
                                source = {require('../../assets/icons/png/legume.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
                                Legumes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Salads) }}
                        >
                            <Image
                                source = {require('../../assets/icons/png/salada.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
                                Saladas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Fruits) }}
                        >
                            <Image
                                source = {require('../../assets/icons/png/fruta.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
                                Frutas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Sauces) }}
                        >
                            <Image
                                source = {require('../../assets/icons/png/molho.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
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
                                source = {require('../../assets/icons/png/peixe.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
                                Peixes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Cultivation) }}
                        >
                            <Image
                                source = {require('../../assets/icons/png/cultivo.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
                                cultivo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Plants) }}
                        >
                            <Image
                                source = {require('../../assets/icons/png/planta.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
                                Plantas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => { navigate.navigate(Kitchen) }}
                        >
                            <Image
                                source = {require('../../assets/icons/png/cozinha.png')}
                                style = {{ width: 35, height: 35, marginTop: 5 }}
                            />
                            <Text style={{ color: '#BCBCBC', fontSize: 12, marginTop: 2 }}>
                                Cozinha
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={Produtos}
                    renderItem={renderCard}
                    keyExtractor={item => item.id}
                    style={{ height: 100, marginTop: 30, width: '85%' }}
                />
            </View>
            <BottomBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#181A20',
        alignItems: 'center',
    },
    container: {
        flex: 0.8,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#181A20',
    },
    input: {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: 60,
        borderRadius: 15,
        color: '#838383',
        paddingLeft: 16,
        fontSize: 17,
        margin: 'auto',
        marginTop: 15,
    },
    box: {
        width: '85%',
        margin: 'auto',
        marginTop: 15,
    },
    child: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btn: {
        width: 75,
        height: 65,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: '#3A3A3A',
        justifyContent: 'center',
        alignItems: 'center',
    },
})