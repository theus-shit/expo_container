import React from "react";
import {ScrollView} from 'react-native';
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/Cartaousuario";


export default function App(){
  return<ScrollView>
      <Titulo />
    <Saudacao nome='Zésinho' />
    <FotoPerfil/>

    <CartaoUsuario nome='Jair Aparecido' 
    descricao='Jogador da base'
    img='perfil00'
    />
    </ScrollView>
}