import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CartCard({ name, price, amount, image }) {
    return (
        <View style={styles.container}>
            <View style={{ width: '20%', minWidth: 60 }}>
                <Image
                    source={{ uri: image }}
                    style = {{ width: 55, height: 55, borderRadius: 50, margin: 5 }}
                    alt="Imagem do produto"
                />
            </View>
            <View style={styles.child}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>
                        {name}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}> 
                        <Icon
                            name="money-bill-wave"
                            size={15}
                            color="#75F94C"
                            style={{ marginRight: 10, marginTop: 3 }}
                        />
                        <Text style={{ color: '#fff', fontWeight: '400' }}>
                            R$: {price}
                        </Text>
                    </View>
                </View>
                <View style={styles.quant}>
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 18 }}>
                        {amount}
                    </Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Icon
                        name="minus"
                        size={35}
                        color="#BB271A"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        margin: 'auto',
        padding: 2,
        borderWidth: 2,
        borderColor: '#585858',
        marginVertical: 5,
        borderRadius: 18,
    },
    child : {
        width: '80%',
        paddingLeft: 4,
        flexDirection: 'row',
        position: 'relative',
    },
    quant : {
        backgroundColor: '#3A3A3A',
        width: 45,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
        borderRadius: 12,
        position: 'absolute',
        right: 70,
    },
    btn : {
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        marginVertical: 12,
        borderRadius: 12,
        position: 'absolute',
        right: 10,
    }
})