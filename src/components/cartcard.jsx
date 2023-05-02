import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

export default function CartCard({ name, price, amount, image }) {
    return (
        <View style={styles.container}>
            <View style={{ width: '20%', minWidth: '60px' }}>
                <Image
                    source={{ uri: image }}
                    style = {{ width: '60px', height: '60px', borderRadius: '50%' }}
                    alt="Imagem do produto"
                />
            </View>
            <View style={styles.child}>
                <View>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: '16px' }}>
                        {name}
                    </Text>
                    <View style={styles.box}>
                        <Image
                            source={require('../../assets/icons/money.svg')}
                            style={{ width: '20px', height: '20px', marginRight: '5px' }}
                            alt="Icon preco"
                        />
                        <Text style={{ color: 'white', fontSize: '16px', fontWeight: '400' }}>
                            {price}
                        </Text>
                    </View>
                </View>
                <View style={styles.quant}>
                    <Text style={{ color: '#fff', fontSize: '12px' }}>
                        quant
                    </Text>
                    <View style={styles.amount}>
                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: '20px' }}>
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
        width: '85%',
        flexDirection: 'row',
        marginTop: '20px',
        paddingBottom: '8px',
        borderBottomWidth: '2px',
        borderBottomColor: '#585858',
        margin: 'auto',
    },
    child : {
        width: '80%',
        paddingLeft: '5px',
        flexDirection: 'row',
    },
    quant : {
        textAlign: 'center',
        alignItems: 'center',
        width: '90px',
    },
    amount : {
        backgroundColor: '#3A3A3A',
        justifyContent: 'center',
        marginTop: '3px',
        borderRadius: '10px',
        textAlign: 'center',
        height: '35px',
        width: '50px',
    },
    btn: {
        width: '30px',
        height: '100%',
        justifyContent: 'center',
        marginLeft: '8px',
    },
    line : {
        border: '3px solid #C42727', 
        borderRadius: '3px',
        width: '100%',
    },
    box: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        marginTop: '8px',
        position: 'relative',
    },
})