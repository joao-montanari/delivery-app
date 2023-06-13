import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import SimpleTopBar from "../components/simpletopbar";
import Shopping from "./shopping";

export default function ProductDetail() {
    const route = useRoute();
    const { 
        id,
        nome,
        avaliacao,
        preco,
        fornecedor,
        descricacao,
        imagem
    } = route.params;

    const [quantidade, setQuantidade] = useState(1);

    const subtrai = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    return (
        <View style={styles.main}>
            <SimpleTopBar
                page={Shopping}
            />
            <View style={styles.container}>
                {/* <Image
                    source={{ uri: imagem }}
                    style={{ width: '100%', height: 200 }}
                /> */}
                <View style={styles.child}>
                    <Text style={styles.title}>
                        {nome}
                    </Text>
                    <View style={styles.infos}>
                        <Icon
                            name="star"
                            size={20}
                            color="#faba32"
                        />
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', marginLeft: 16 }}>
                            {avaliacao}
                        </Text>
                    </View>
                    <View style={styles.infos}>
                        <Icon
                            name="money-bill-wave"
                            size={20}
                            color="#75F94C"
                        />
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', marginLeft: 16 }}>
                            R$: {preco}
                        </Text>
                    </View>
                    <View style={styles.infos}>
                        <Icon
                            name="box"
                            size={20}
                            color="#75F94C"
                        />
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', marginLeft: 16 }} numberOfLines={1}>
                            Fornecedor: {fornecedor}
                        </Text>
                    </View>
                    <View style={{ paddingLeft: 16, paddingRight: 16, height: 140 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', color: '#fff', marginTop: 16 }}>
                            Descrição:
                        </Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginTop: 5, textAlign: 'justify' }} numberOfLines={4}>
                            {descricacao}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 18 }}>
                            Quantidade:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 25, width: 250, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.btnquant} onPress={() => {setQuantidade(quantidade + 1)}}>
                                <Icon
                                    name="plus"
                                    color="#75F94C"
                                    size={35}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 40 }}>
                                {quantidade}
                            </Text>
                            <TouchableOpacity style={styles.btnquant} onPress={() => subtrai()}>
                                <Icon
                                    name="minus"
                                    color="#75F94C"
                                    size={35}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: 18, }}>
                                Adicionar ao carrinho
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#181A20'
    },
    container: {
        flex: 0.9,
        backgroundColor: '#181A20',
        alignItems: 'center',
    },
    child: {
        width: '85%',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        paddingBottom: 8,
        borderBottomColor: '#BCBCBC',
        borderBottomWidth: 2,
        paddingLeft: 10,
    },
    infos: { 
        flexDirection: 'row', 
        borderBottomColor: '#BCBCBC', 
        borderBottomWidth: 2,  
        paddingBottom: 8,
        marginTop: 12,
        paddingLeft: 20,
        alignItems: 'center',
    },
    btnquant: { 
        borderColor: '#BCBCBC', 
        borderWidth: 2, 
        borderRadius: 14, 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
    },
    btn: {
        backgroundColor: '#94DD26',
        width: '100%',
        height: 50,
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: '#94DD26',
        marginTop: 30,
        marginHorizontal : 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
})