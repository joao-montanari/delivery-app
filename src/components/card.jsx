import { View, StyleSheet, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

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
                    <Text style={styles.title} numberOfLines={1}>
                        {name}
                    </Text>
                    <View style={styles.box}>
                        <Text style={{ color: 'white' }}>
                            Avaliação: {evaluation}
                        </Text>
                        <Icon
                            name="star"
                            size={15}
                            color="#faba32"
                            style={{ marginLeft: 8 }}
                        />
                    </View>
                    <View style={styles.box}>
                        <Icon
                            name="money-bill-wave"
                            size={18}
                            color="#75F94C"
                            style={{ marginRight: 10 }}
                        />
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>
                            {price}
                        </Text>
                        <Icon
                            name="heart"
                            size={20}
                            color="#b11623"
                            style={{ position: 'absolute', right: 0 }}
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
        width: '100%',
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
        fontSize: 17,
    },
    box: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        marginTop: 8,
        position: 'relative',
    },
})