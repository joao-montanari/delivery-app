import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";

export default function Card({ name, price, image, evaluation }) {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={{ width: '20%', minWidth: 90 }}>
                    <Image
                        source={{ uri: image }}
                        style = {{ width: 90, height: 90, borderRadius: 25 }}
                        alt="Imagem do produto"
                    />
                </View>
                <View style={styles.child}>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <View style={styles.box}>
                        <Text style={{ color: 'white' }}>
                            Avaliação: {evaluation}
                        </Text>
                        <Image
                            source={require('../../assets/icons/estrela.svg')}
                            style={{ width: 15, height: 15, marginLeft: 8 }}
                            alt="Estrelas"
                        />
                    </View>
                    <View style={styles.box}>
                        <Image
                            source={require('../../assets/icons/money.svg')}
                            style={{ width: 20, height: 20, marginRight: 5 }}
                            alt="Icon preco"
                        />
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>
                            {price}
                        </Text>
                        <Image
                            source={require('../../assets/icons/coracao.svg')}
                            style={{ width: 20, height: 20, position: 'absolute', right: '0' }}
                            alt="Icon coracao"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#22283A',
        width: '85%',
        height: 120,
        borderRadius: 30,
        margin: 'auto',
        marginBottom: 20,
        padding: 15
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    child: {
        paddingLeft: 12,
        height: 'auto',
        width: '70%',
    },
    title: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    box: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        marginTop: 8,
        position: 'relative',
    },
})