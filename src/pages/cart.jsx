import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";

import TopBar from "../components/topbar";
import BottomBar from "../components/bottombar";
import CartCard from "../components/cartcard";
import Buy from "./buy";

export default function Cart() {
    const navigate = useNavigation()

    const ProdCart = [
        {
            id : 1,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 2,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 3,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 4,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 5,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 6,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 7,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 8,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 9,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : 10,
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
    ]

    const renderCard = ({ item }) => (
        <CartCard
            name = {item.name}
            price = {item.price}
            amount = {item.amount}
            image = {item.image}
        />
    )

    return (
        <View style={styles.main}>
            <TopBar/>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: '85%', height: '89%' }} >
                    <FlatList
                        data={ProdCart}
                        renderItem={renderCard}
                        keyExtractor={item => item.id}
                        style={{ width: '100%', margin: 'auto', height: 100}}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigate.navigate(Buy)}>
                    <Text style={{ color: '#94DD26', fontWeight: '500', fontSize: 18 }}>
                        Finalizar compra
                    </Text>
                </TouchableOpacity>
            </View>
            <BottomBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: '#000',
    },
    container : {
        flex: 0.8,
        backgroundColor: '#181A20',
        alignItems: 'center',
    },
    btn: {
        width: '85%',
        height: 50,
        borderWidth: 3,
        borderColor: '#94DD26',
        borderRadius: 15,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})