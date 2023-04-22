import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Home from "../pages/home";
import Shopping from "../pages/shopping";

export default function SimpleTopBar({ page, title }) {
    const navigate = useNavigation();

    function Navegar() {
        if (page === 'home') {
            navigate.navigate(Home);
        } else if (page === 'shopping') {
            navigate.navigate(Shopping);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Navegar()} >
                <Image
                    source={require('../../assets/voltar.png')}
                    style = {{ width: '35px', height: '35px', marginLeft: '30px' }}
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
        flex: '0.1',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#181A20',
    },
    title: {
        color: 'white',
        marginLeft: '25px',
        fontSize: '22px',
        fontWeight: '500',
    }
})