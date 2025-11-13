import React from "react";
import { Text } from "react-native";

export default function Saudacao({nome}){
    return(
        <Text style={{fontSize:18, marginBottom:5}}>
            Olá {nome}
        </Text>
    )
}