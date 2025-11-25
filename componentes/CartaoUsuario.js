import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import fotos from '../img/fotos';

export default function CartãoUsuario({ nome, idade, rede_social, endereco, img }) {

    const lidarComClique = () => {
        Alert.alert("Ação do Botão", `Você clicou no perfil de ${nome}!`);
    };

    return (
        <View style={estilos.cartao}>
            <Image source={fotos[img]} style={estilos.foto} />
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.idade}>{idade}</Text>
            <Text style={estilos.rede_social}>{rede_social}</Text>
            <Text style={estilos.endereco}>{endereco}</Text>

            <TouchableOpacity
                style={estilos.botao}
                onPress={lidarComClique}
            >
                <Text style={estilos.textoBotao}>Ver Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({

    cartao: {
        margin: 10,
        width: 340,
        backgroundColor: '#bacfcfff',
        padding: 60,
        marginLeft: 50,
        marginTop: 20,
        borderRadius: 25,
        alignItems: 'center',
        elevation: 15,
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    endereco: {
        fontSize: 14,
        color: '#000000ff',
        textAlign: 'center',
    },

    botao: {
        marginTop: 15,
        backgroundColor: '#5b82a8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});