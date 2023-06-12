import React, {useState} from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, Modal, Dimensions, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';

export default function CardAddress({ bairro, rua, numero, id, selected }) {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Icon
                    name="earth"
                    size={40}
                    color="#75F94C"
                    style={{ marginLeft: 10 }}
                />
                <View style={styles.child}>
                    <Text style={styles.text}>
                        Bairro: {bairro}
                    </Text>
                    <Text style={styles.text}>
                        Rua: {rua}
                    </Text>
                    <Text style={styles.text}>
                        Número: {numero}
                    </Text>
                </View>
                {
                    (id === selected) && (
                        <Icon
                            name="check"
                            color="#75F94C"
                            size={30}
                            style={{ position: 'absolute', right: 0, marginRight: 30 }}
                        />
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: '#22283A',
        height: 120,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        height: '100%',
        position: 'relative',
    },
    child: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 15,
        height: '100%'
    },
    text: {
        color: 'white',
        fontWeight: '600',
        marginBottom: 5,
    },
})