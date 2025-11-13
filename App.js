import React from "react";
import { ScrollView } from "react-native";
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/CartaoUsuario";
//import FotoPerfil from "./componentes/FotoPerfil";
//import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App(){
  return<ScrollView>
      <Titulo />
      <Saudacao nome='Ygor' />
      <FotoPerfil />

      <CartaoUsuario
      nome='joão da Silva'
      descricao='Programador mobile'
      img='perfil00'
      />

      <CartaoUsuario
      nome='Maria Souza'
      descricao='Programador mobile'
      img='perfil01'
      />


      <CartaoUsuario
      nome='pedro silva'
      descricao='Programador mobile'
      img='perfil02'
      />
</ScrollView>



}