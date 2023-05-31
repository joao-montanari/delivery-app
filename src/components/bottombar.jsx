import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import Icon from 'react-native-vector-icons/FontAwesome5';

import Shopping from "../pages/shopping";
import Cart from "../pages/cart";
import User from "../pages/user";

export default function BottomBar() {
    const navigate = useNavigation();

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.child}>
                    <TouchableOpacity onPress={() => {navigate.navigate(Shopping)}}>
                        <Icon
                            name="home"
                            size={32}
                            color="#E6E6E6"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigate.navigate(Cart)}}>
                        <Icon
                            name="store"
                            size={32}
                            color="#E6E6E6"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon
                            name="map"
                            size={32}
                            color="#E6E6E6"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigate.navigate(User)}}>
                        <Icon
                            name="user-alt"
                            size={32}
                            color="#E6E6E6"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 0.1,
        backgroundColor: '#181A20',
    },
    container: {
        backgroundColor: '#393939',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    child: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        margin: 'auto'
    },
    icons: {
        width: 40,
        height: 40,
    }
})