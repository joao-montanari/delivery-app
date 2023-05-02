import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

import TopBar from "../components/topbar";
import BottomBar from "../components/bottombar";
import CartCard from "../components/cartcard";

export default function Cart() {
    
    const ProdCart = [
        {
            id : '1',
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : '2',
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : '3',
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : '4',
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : '5',
            name : 'Arroz Integral',
            price : 15.01,
            amount : 2,
            image : 'https://images.tcdn.com.br/img/img_prod/691079/arroz_integral_73_1_48a95a6e62ee83d9a1793bef5baaa0e5.jpg',
        },
        {
            id : '6',
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
                <FlatList
                    data={ProdCart}
                    renderItem={renderCard}
                    keyExtractor={item => item.id}
                    style={{ width: '100%', margin: 'auto', height: '100px' }}
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#94DD26', fontWeight: '500', fontSize: '18px' }}>
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
        flex: '1',
        backgroundColor: '#000',
    },
    container : {
        flex: '0.8',
        backgroundColor: '#181A20',
    },
    btn: {
        width: '85%',
        height: '50px',
        border: '3px solid #94DD26',
        borderRadius: '15px',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '10px',
        marginBottom: '20px',
    }
})