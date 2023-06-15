import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/Fontisto';
// import DropDownPicker from "react-native-dropdown-picker";

import SimpleTopBar from "../components/simpletopbar";
import Select from "../components/select";

export default function Buy() {
    const navigate = useNavigation();
    
    const [openDropDown, setOpenDropDown] = useState(false);
    const [valueDropDown, setValueDropDown] = useState(null);

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
    ]

    return (
        <View style={styles.main}>
            <SimpleTopBar
                page={'Cart'}
                title={'Sua compra'}
            />
            <View style={styles.container}>
                <Icon
                    name="shopping-store"
                    size={120}
                    color="#75F94C"
                    style={{ marginBottom: 70, marginTop: 50 }}
                />
                <View style={styles.box}>
                    <Icon
                        name="shopping-basket-add"
                        color="#75F94C"
                        size={22}
                        style={{ marginRight: 10 }}
                    />
                    <Text style={{ color: '#BCBCBC', fontWeight: '600' }}>
                        Valor total da compra:
                    </Text>
                    <Text style={{ color: 'white', position: 'absolute', right: 0 }}>
                        R$: 190.00
                    </Text>
                </View>
                <View style={styles.box}>
                    <Icon
                        name="person"
                        color="#75F94C"
                        size={22}
                        style={{ marginRight: 10 }}
                    />
                    <Text style={{ color: '#BCBCBC', fontWeight: '600' }}>
                        Nome do cliente:
                    </Text>
                    <Text style={{ color: 'white', position: 'absolute', right: 0 }}>
                        João Montanari
                    </Text>
                </View>
                <View style={styles.box}>
                    <Icon
                        name="prescription"
                        color="#75F94C"
                        size={22}
                        style={{ marginRight: 10 }}
                    />
                    <Text style={{ color: '#BCBCBC', fontWeight: '600' }}>
                        Data:
                    </Text>
                    <Text style={{ color: 'white', position: 'absolute', right: 0 }}>
                        31/05/2023
                    </Text>
                </View>
                <View style={styles.box}>
                    <Icon
                        name="wallet"
                        color="#75F94C"
                        size={22}
                        style={{ marginRight: 10 }}
                    />
                    <Text style={{ color: '#BCBCBC', fontWeight: '600' }}>
                        Tipo de pagamento
                    </Text>
                </View>
                <View style={styles.boxaddress}>
                    <Text style={{ color: 'white', fontWeight: '600', marginBottom: 10 }}>
                        Endereço de entrega:
                    </Text>
                    <Select
                        options = {enderecos}
                        onChangeSelect = {(id) => console.log(id)}
                        ruadefault={'Selecione'}
                        bairrodefault={'um endereço'}
                    />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ margin: 'auto', color: 'white', fontWeight: 'bold', fontSize: 18, }}>
                        Confirmar dados da compra
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    container : {
        flex: 0.9,
        backgroundColor: '#181A20',
        alignItems: 'center',
        width: '100%',
    },
    box : {
        flexDirection: 'row',
        width: '80%',
        position: 'relative',
        marginBottom: 35,
    },
    boxaddress : {
        width: '85%',
        marginTop: 15
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