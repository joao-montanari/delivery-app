import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ProductDatail({ route }) {
    const { objeto } = route.params || {};
    console.log(objeto)

    return (
        <View>
            <Text>
                {objeto}
            </Text>
        </View>
    )
}