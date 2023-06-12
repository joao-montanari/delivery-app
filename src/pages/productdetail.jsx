import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5'

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

    return (
        <View style={styles.main}>
            <SimpleTopBar
                page={Shopping}
            />
            <View style={styles.container}>
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
                    <View style={{ borderColor: '#fff', borderWidth: 1, paddingLeft: 16 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', color: '#fff', marginTop: 16 }}>
                            Descrição:
                        </Text>
                        <Text style={{ color: '#fff', fontSize: 16, marginTop: 8 }}>
                            {descricacao}
                        </Text>
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
        // borderColor: '#fff',
        // borderWidth: 1,
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
    },
})