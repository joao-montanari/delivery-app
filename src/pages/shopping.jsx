import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function Shopping() {
    const navigate = useNavigation();
    
    const [pesquisa, onChangePesquisa] = useState();
    
    return (
        <View style={styles.main}>
            <View style={styles.child}>

            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePesquisa}
                    value={pesquisa}
                    placeholder="O que você está procurando?"
                />
                <View style={styles.box}>
                    <Text style={{  }}>
                        Categorias
                    </Text>
                    <Viwe style={styles.grade}>

                    </Viwe>
                    <Viwe style={styles.grade}>

                    </Viwe>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: '1',
        backgroundColor: '#000',
    },
    container: {
        flex: '0.9',
        backgroundColor: '#181A20',
    },
    input: {
        backgroundColor: '#3A3A3A',
        width: '85%',
        height: '60px',
        borderRadius: '15px',
        color: '#838383',
        paddingLeft: '16px',
        fontSize: '17px',
        margin: 'auto',
    },
})