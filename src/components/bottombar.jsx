import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

import Shopping from "../pages/shopping";
import Cart from "../pages/cart";

export default function BottomBar() {
    const navigate = useNavigation();

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.child}>
                    <TouchableOpacity onPress={() => {navigate.navigate(Shopping)}}>
                        <Image
                            source={require('../../assets/icons/home.svg')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigate.navigate(Cart)}}>
                        <Image
                            source={require('../../assets/icons/carrinho.svg')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/icons/mapa.svg')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/icons/user.svg')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: '0.1',
        backgroundColor: '#181A20',
    },
    container: {
        backgroundColor: '#393939',
        width: '100%',
        height: '100%',
        borderTopRightRadius: '25px',
        borderTopLeftRadius: '25px',
    },
    child: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        margin: 'auto'
    },
    icons: {
        width: '40px',
        height: '40px',
    }
})