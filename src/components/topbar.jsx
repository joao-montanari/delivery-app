import React from "react";
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function TopBar(props) {
    return (
        <View style={style.container}>
            <View style={style.child}>
                <View style={style.boxleft}>
                    <Image
                        source = {{ uri: props.photo }}
                        style = {{ width: '50px', height: '50px' }}
                    />
                    <View style={{ marginLeft: '10px' }}>
                        <Text style={{ color: '#94DD26', fontSize: '16px', fontWeight: 'bold' }}>
                            Usuário:
                        </Text>
                        <Text style={{ color: '#fff', fontSize: '16px' }}>
                            {props.name}
                        </Text>
                    </View>
                </View>
                <View style={style.boxright}>
                    <TouchableOpacity style={style.btn}>
                        <Image
                            source={require('../../public/icons/favorito.svg')} 
                            style = {{ width: '30px', height: '30px', margin: 'auto' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btn}>
                        <Image
                            source={require('../../public/icons/carrinho.svg')} 
                            style = {{ width: '30px', height: '30px', margin: 'auto' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: '0.1',
        backgroundColor: '#181A20',
    },
    child: {
        flexDirection: 'row',
        width: '85%',
        height: 'auto',
        margin: 'auto',
    },
    boxleft: {
        border: '1px solid #fff',
        flexDirection: 'row',
        margin: 'auto',
        width: '60%',
        height: '100%',
        alignItems: 'center',
    },
    boxright: {
        border: '1px solid #fff',
        flexDirection: 'row',
        margin: 'auto',
        width: '40%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btn: {
        border: '2px solid #fff',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '10px',
    },
})

TopBar.defaultProps = {
    name: 'Indefinido',
    data: 'https://www.citypng.com/public/uploads/small/116399610936x9dkjmtnusfoaai6t2zjdnsqdyt7awdjntzcod7chrjrkay6qhj4szfjpdhlsun0dlcoyp5iez3unwc8pafjzofujmluc7hxf9d.png'
}