import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import SignIn from './signin';
import SignUp from './signup';

export default function Home(){
    const navigate = useNavigation();

    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/marca.png')}
                style={{ width: 300, height: 100 }}
            />
            <TouchableOpacity style={styles.btnsingin} onPress={() => { navigate.navigate(SignIn) }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                    Sign in
                </Text>
            </TouchableOpacity>
            <View style={styles.child}>
                <Text style={{ color: 'white', fontSize: 17 }}>
                    Não tem uma conta?
                </Text>
                <TouchableOpacity style={styles.btnsingup} onPress={() => { navigate.navigate(SignUp) }} >
                    <Text style={{ color: '#94DD26', fontSize: 18, fontWeight: 'bold' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181A20",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnsingin: {
        backgroundColor: '#94DD26',
        width: '80%',
        height: 45,
        borderRadius: 15,
        marginTop: 80,
        shadowColor: '#94DD26',
        justifyContent: 'center',
        alignItems: 'center',
    },
    child: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 250,
        marginTop: 20,
        //borderWidth : 1,
        //borderColor: 'white',
    },
})