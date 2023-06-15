import React from "react";
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

import Cart from "../pages/cart";

export default function TopBar({ name, photo }) {
    const navigate = useNavigation();

    return (
        <View style={style.container}>
            <View style={style.child}>
                <View style={style.boxleft}>
                    <Image
                        source = {{ uri: photo }}
                        style = {{ width: 50, height: 50 }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: '#94DD26', fontSize: 16, fontWeight: 'bold' }}>
                            Usuário:
                        </Text>
                        <Text style={{ color: '#fff', fontSize: 16 }}>
                            {name}
                        </Text>
                    </View>
                </View>
                <View style={style.boxright}>
                    <TouchableOpacity style={style.btngreen}>
                        <Icon
                            name='favorite'
                            size={27}
                            color='#94DD26'
                            style={{ margin: 'auto' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btn} onPress={() => navigate.navigate(Cart)}>
                        <Icon
                            name='shopping-bag'
                            size={25}
                            color='white'
                            style={{ margin: 'auto' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 0.1,
        width: '100%',
        backgroundColor: '#181A20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    child: {
        flexDirection: 'row',
        width: '85%',
        height: 'auto',
        margin: 'auto',
    },
    boxleft: {
        flexDirection: 'row',
        margin: 'auto',
        width: '60%',
        height: '100%',
        alignItems: 'center',
    },
    boxright: {
        flexDirection: 'row',
        margin: 'auto',
        width: '40%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btn: {
        borderWidth: 2,
        borderColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btngreen: {
        borderWidth: 2,
        borderColor: '#94DD26',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btngreen: {
        borderWidth: 2,
        borderColor: '#75F94C',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btngreen: {
        borderWidth: 2,
        borderColor: '#94DD26',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

TopBar.defaultProps = {
    name: 'Indefinido',
    photo: 'https://www.citypng.com/public/uploads/small/116399610936x9dkjmtnusfoaai6t2zjdnsqdyt7awdjntzcod7chrjrkay6qhj4szfjpdhlsun0dlcoyp5iez3unwc8pafjzofujmluc7hxf9d.png'
}