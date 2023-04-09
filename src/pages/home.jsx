import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SingIn from './singin';

export default function Home(){
    const navigate = useNavigation();

    return(
        <View style={styles.container}>
            <Image
                source={require('../../public/marca.png')}
                style={{ width: '300px', height: '100px' }}
            />
            <TouchableOpacity style={styles.btnsingin} onPress={() => { navigate.navigate(SingIn) }}>
                <Text style={styles.textsingin}>
                    Sign in
                </Text>
            </TouchableOpacity>
            <View style={styles.child}>
                <Text style={{ color: 'white', fontSize: '17px' }}>
                    Não tem uma conta?
                </Text>
                <TouchableOpacity style={styles.btnsingup} >
                    <Text style={{ color: '#94DD26', fontSize: '18px', fontWeight: 'bold' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: '1',
        backgroundColor: "#181A20",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnsingin: {
        backgroundColor: '#94DD26',
        width: '80%',
        height: '45px',
        textAlign: 'center',
        borderRadius: '15px',
        marginTop: '80px',
        shadowColor: '#94DD26'
    },
    textsingin: {
        margin: 'auto',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
    },
    child: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '250px',
        marginTop: '20px'
    },
})