import React from "react";
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';

export default function TopBar({ name, photo }) {
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
                    <TouchableOpacity style={style.btn}>
                        <Icon
                            name="favorite"
                            size={25}
                            color="#75F94C"
                            style={{ margin: 'auto' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btn}>
                        <Icon
                            name="shopping-basket"
                            size={25}
                            color="#E6E6E6"
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
        backgroundColor: '#181A20',
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
        borderRadius: '50%',
        marginLeft: 10,
    },
    btngreen: {
        borderWidth: 2,
        borderColor: '#75F94C',
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginLeft: 10,
    },
})

TopBar.defaultProps = {
    name: 'Indefinido',
    photo: 'https://www.citypng.com/public/uploads/small/116399610936x9dkjmtnusfoaai6t2zjdnsqdyt7awdjntzcod7chrjrkay6qhj4szfjpdhlsun0dlcoyp5iez3unwc8pafjzofujmluc7hxf9d.png'
}