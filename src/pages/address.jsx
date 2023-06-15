import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

import SimpleTopBar from "../components/simpletopbar";
import AddAddress from "./addaddress";

export default function Address() {
    const navigate = useNavigation();

    const enderecos = [
        {
            id : 1,
            rua : 'Rodolfo Favalli',
            bairro : 'Pq das Camelias',
            numero : '05',
            complemento : 'casa',
            pais : 'Brasil',
            uf : 'SP',
            cep : '098234234',
            usuario : {
                id : 1
            }
        },
        {
            id : 2,
            rua : 'Arnaldo Cessar',
            bairro : 'Pq das Flores',
            numero : '09',
            complemento : 'predio',
            pais : 'Brasil',
            uf : 'SP',
            cep : '080934234',
            usuario : {
                id : 3
            }
        },
        {
            id : 3,
            rua : 'Joaquim Pereira',
            bairro : 'Pq João Jorge',
            numero : '13',
            complemento : 'casa',
            pais : 'Brasil',
            uf : 'SP',
            cep : '888999333',
            usuario : {
                id : 2
            }
        },
        // {
        //     id : 4,
        //     rua : 'Joaquim Pereira',
        //     bairro : 'Pq João Envilhe',
        //     numero : '13',
        //     complemento : 'casa',
        //     pais : 'Brasil',
        //     uf : 'SP',
        //     cep : '888999333',
        //     usuario : {
        //         id : 2
        //     }
        // },
        // {
        //     id : 5,
        //     rua : 'Joaquim Pereira',
        //     bairro : 'Pq João Envilhe',
        //     numero : '13',
        //     complemento : 'casa',
        //     pais : 'Brasil',
        //     uf : 'SP',
        //     cep : '888999333',
        //     usuario : {
        //         id : 2
        //     }
        // },
        // {
        //     id : 6,
        //     rua : 'Joaquim Pereira',
        //     bairro : 'Pq João Envilhe',
        //     numero : '13',
        //     complemento : 'casa',
        //     pais : 'Brasil',
        //     uf : 'SP',
        //     cep : '888999333',
        //     usuario : {
        //         id : 2
        //     }
        // },
        // {
        //     id : 7,
        //     rua : 'Joaquim Pereira',
        //     bairro : 'Pq João Envilhe',
        //     numero : '13',
        //     complemento : 'casa',
        //     pais : 'Brasil',
        //     uf : 'SP',
        //     cep : '888999333',
        //     usuario : {
        //         id : 2
        //     }
        // },
        // {
        //     id : 8,
        //     rua : 'Joaquim Pereira',
        //     bairro : 'Pq João Envilhe',
        //     numero : '13',
        //     complemento : 'casa',
        //     pais : 'Brasil',
        //     uf : 'SP',
        //     cep : '888999333',
        //     usuario : {
        //         id : 2
        //     }
        // },
        // {
        //     id : 9,
        //     rua : 'Joaquim Pereira',
        //     bairro : 'Pq João Envilhe',
        //     numero : '13',
        //     complemento : 'casa',
        //     pais : 'Brasil',
        //     uf : 'SP',
        //     cep : '888999333',
        //     usuario : {
        //         id : 2
        //     }
        // },
        // {
        //     id : 10,
        //     rua : 'Joaquim Pereira',
        //     bairro : 'Pq João Envilhe',
        //     numero : '13',
        //     complemento : 'casa',
        //     pais : 'Brasil',
        //     uf : 'SP',
        //     cep : '888999333',
        //     usuario : {
        //         id : 2
        //     }
        // },
    ]

    const renderItem = ({ item }) => (
        <View style={{ position: 'relative', width: '100%', borderBottomColor: '#A9A9A9', borderBottomWidth: 2, paddingBottom: 8, marginTop: 20, flexDirection: 'row' }}>
            <Icon
                name="earth"
                size={40}
                color="#75F94C"
                style={{ marginLeft: 10 }}
            />
            <View style={{ marginLeft: 15 }}>
                <Text style={{ color: '#A9A9A9', fontWeight: '600' }} numberOfLines={1}>
                    Rua: {item.rua}
                </Text>
                <Text style={{ color: '#A9A9A9', fontWeight: '600' }} numberOfLines={1}>
                    Bairro: {item.bairro}
                </Text>
            </View>
            <Icon
                name="angle-right"
                size={25}
                color="#A9A9A9"
                style={{ position: 'absolute', right: 0, marginRight: 10 }}
            />
        </View>
    )

    return (
        <View style={styles.main}>
            <SimpleTopBar
                page={'User'}
                title='Endereços salvos'
            />
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: '85%', height: '90%' }} >
                    <FlatList
                        data={enderecos}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        style={{ width: '100%', margin: 'auto', height: 100}}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigate.navigate(AddAddress)}>
                    <Icon
                        name="plus-a"
                        color="#fff"
                        size={42}
                    />
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
        position: 'relative',
    },
    btn: {
        backgroundColor: '#75F94C',
        position: 'absolute',
        bottom: 0,
        marginBottom: 30,
        right: 0,
        marginRight: 30,
        padding: 8,
        borderRadius: 50,
    }
})