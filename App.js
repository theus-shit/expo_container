import React from "react";
import {ScrollView} from 'react-native';
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/saudacao";

export default function App(){
  return(
    <ScrollView style={{padding:20}}>
      <Titulo />
      <Saudacao nome="Matheus"/>
      <Saudacao nome="Milena"/>
      <Saudacao nome="Casal"/>


    </ScrollView>
  )
}