import React, {useState} from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, Modal, Dimensions, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';

import CardAddress from "./cardaddress";

const { width } = Dimensions.get('window');

export default function Select({ options, onChangeSelect, ruadefault, bairrodefault }) {
    const [street, setStreet] = useState(ruadefault);
    const [bairro, setBairro] = useState(bairrodefault);
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState();

    function renderOption ({ item }) {
        return (
            <TouchableOpacity onPress={() => {
                    onChangeSelect(item.id);
                    setStreet(item.rua);
                    setBairro(item.bairro);
                    setModalVisible(false);
                    setSelected(item.id);
                }}
            >
                <CardAddress
                    bairro={item.bairro}
                    rua={item.rua}
                    numero={item.numero}
                    id={item.id}
                    selected={selected}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
                <View style={styles.child}>
                    <Icon
                        name="earth"
                        size={35}
                        color="#75F94C"
                    />
                    <View>
                        <Text numberOfLines={1} style={styles.txt}>
                            {street}
                        </Text>
                        <Text numberOfLines={1} style={styles.txt}>
                            {bairro}
                        </Text>
                    </View>
                </View>
                <Icon
                    name="angle-down"
                    color="#fff"
                    size={20}
                />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <SafeAreaView style={{ backgroundColor: '#181A20', height: '100%' }}>
                    <View style={styles.headerModal}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Icon
                                name="angle-left"
                                size={25}
                                color="#fff"
                            />
                        </TouchableOpacity>
                        <Text numberOfLines={1} style={styles.modalTitle}>
                            Endereço
                        </Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalCancelar}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={renderOption}
                            style={{ width: '85%', height: '90%' }}
                        />
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height: 65,
        backgroundColor: '#3A3A3A',
        paddingHorizontal: 15,
        borderRadius: 13,
        fontSize: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    child : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        color: '#BCBCBC', 
        fontWeight: '600', 
        fontSize: 15, 
        marginLeft: 10,
        width: width - 200,
    },
    headerModal : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomColor: '#181A20',
        borderBottomWidth: 1,
        paddingBottom: 12,
        marginTop: 10,
    },
    modalTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    modalCancelar: {
        color: '#75F94C',
        fontWeight: 'bold',
        fontSize: 16
    },
})