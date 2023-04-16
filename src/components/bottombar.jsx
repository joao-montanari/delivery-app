import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function BottomBar() {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.child}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../public/icons/home.svg')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../public/icons/carrinho.svg')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../public/icons/mapa.svg')}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../public/icons/user.svg')}
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