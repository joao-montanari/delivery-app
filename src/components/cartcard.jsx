import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CartCard({ name, price, amount, image }) {
    return (
        <View style={styles.container}>
            <View style={{ width: '20%', minWidth: 60 }}>
                <Image
                    source={{ uri: image }}
                    style = {{ width: 60, height: 60, borderRadius: 50 }}
                    alt="Imagem do produto"
                />
            </View>
            <View style={styles.child}>
                <View>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>
                        {name}
                    </Text>
                    <View style={styles.box}>
                        <Icon
                            name="money-bill-wave"
                            size={18}
                            color="#75F94C"
                            style={{ marginRight: 10 }}
                        />
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>
                            {price}
                        </Text>
                    </View>
                </View>
                <View style={styles.quant}>
                    <Text style={{ color: '#fff', fontSize: 12 }}>
                        quant
                    </Text>
                    <View style={styles.amount}>
                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 20 }}>
                            {amount}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.line}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#585858',
        margin: 'auto',
    },
    child : {
        width: '80%',
        paddingLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    quant : {
        textAlign: 'center',
        alignItems: 'center',
        width: 'auto',
    },
    amount : {
        backgroundColor: '#3A3A3A',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
        borderRadius: 10,
        textAlign: 'center',
        height: 35,
        width: 50,
    },
    btn: {
        width: 30,
        // height: '100%',
        justifyContent: 'center',
        right: 0,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line : {
        borderWidth: 3,
        borderColor: '#C42727',
        borderRadius: 3,
        width: '100%',
    },
    box: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        marginTop: 8,
        position: 'relative',
    },
})