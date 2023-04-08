import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Image
                source={require('../../public/marca.png')}
                style={{ width: '300px', height: '100px' }}
            />
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
})