import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";

export default function Card({ name, price, image, evaluation }) {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={{ width: '20%', minWidth: '90px' , border: '1px solid #fff' }}>
                    <Image
                        source={{ uri: image }}
                        style = {{ width: '90px', height: '90px', borderRadius: '25px' }}
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
                            style={{ width: '15px', height: '15px', marginLeft: '8px' }}
                            alt="Estrelas"
                        />
                    </View>
                    <View style={styles.box}>
                        <Image
                            source={require('../../assets/icons/money.svg')}
                            style={{ width: '20px', height: '20px', marginRight: '5px' }}
                            alt="Icon preco"
                        />
                        <Text style={{ color: 'white', fontSize: '16px', fontWeight: '400' }}>
                            {price}
                        </Text>
                        <Image
                            source={require('../../assets/icons/coracao.svg')}
                            style={{ width: '20px', height: '20px', position: 'absolute', right: '0' }}
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
        height: '120px',
        borderRadius: '30px',
        margin: 'auto',
        marginBottom: '20px',
        padding: '15px'
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    child: {
        paddingLeft: '12px',
        height: 'auto',
        border: '1px solid #fff',
        width: '80%',
    },
    title: {
        color: 'white',
        fontWeight: '500',
        fontSize: '16px',
    },
    box: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        marginTop: '8px',
        position: 'relative',
        border: '1px solid #fff',
    },
})