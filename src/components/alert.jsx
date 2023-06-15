import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper";

export default function Alert({ mensagem, error, setError, timer }) {
    return (
        <Snackbar
            visible={error}
            onDismiss={() => setError(false)}
            duration={timer}
            action={{
                label: 'OK',
                onPress: () => setError(false)
            }}
        >
            {mensagem}
        </Snackbar>
    )
}