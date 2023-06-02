import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SimpleTopBar({ page, title }) {
    const navigate = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate.navigate(page)} >
                <Image
                    source={require('../../assets/voltar.png')}
                    style = {{ width: 35, height: 35, marginLeft: 30 }}
                />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#181A20',
    },
    title: {
        color: 'white',
        marginLeft: 25,
        fontSize: 22,
        fontWeight: '500',
    }
})