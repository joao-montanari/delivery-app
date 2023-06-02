import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/Fontisto';
import DropDownPicker from "react-native-dropdown-picker";

import SimpleTopBar from "../components/simpletopbar";
import Cart from "./cart";

export default function Buy() {
    const navigate = useNavigation();
    
    const [openDropDown, setOpenDropDown] = useState(false);
    const [valueDropDown, setValueDropDown] = useState(null);
    const [itemsDropDown, setItemsDropDown] = useState([
        { label: 'Boleto', value: 0 },
        { label: 'Crédito', value: 1 },
        { label: 'Débito', value: 2 }
    ]);

    const [openAddress, setOpenAddress] = useState(false);
    const [valueAddress, setValueAddress] = useState(null);
    const [itemsAddress, setItemAddress] = useState([
        { label: 'Rua Esquina', value: 0 },
        { label: 'Rua João Batista', value: 1 },
        { label: 'Rua Pq das Camélias', value: 2 }
    ]);

    return (
        <View style={styles.main}>
            <StatusBar/>
            <SimpleTopBar
                page={Cart}
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
                    <DropDownPicker
                        open={openDropDown}
                        value={valueDropDown}
                        items={itemsDropDown}
                        setValue={setValueDropDown}
                        placeholder="Selecione"
                        textStyle={{color:'white'}}
                        theme="LIGHT"
                        style={styles.dropdown}
                    />
                </View>
                <View style={styles.boxaddress}>
                    <Text style={{ color: 'white', fontWeight: '600' }}>
                        Endereço de entrega:
                    </Text>
                    <DropDownPicker
                        open={openAddress}
                        value={valueAddress}
                        items={itemsAddress}
                        setValue={setValueAddress}
                        placeholder="Selecione"
                        textStyle={{color:'white'}}
                        theme="LIGHT"
                        showArrowIcon={true}
                        style={styles.dropdownaddress}
                    />
                </View>
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
    dropdown : {
        color: 'white', 
        position: 'absolute', 
        right: 90,
        width: 110,
        backgroundColor: '#3A3A3A', 
        borderColor: '#3A3A3A'
    },
    dropdownaddress : {
        color: 'white', 
        position: 'absolute', 
        right: 100, 
        width: '80%',
        backgroundColor: '#3A3A3A', 
        borderColor: '#3A3A3A'
    },
    boxaddress : {
        width: '80%',
        borderColor: 'white',
        borderWidth: 1,
    },
})