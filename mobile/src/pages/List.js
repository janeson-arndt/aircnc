import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, AsyncStorage, Image } from 'react-native';
//SafeAreaView mostra o conteúdo apenas na area segura para ser mostrado, exemplo não vai mostrar atras da hora ou do mostrador da bateria

import logo from '../assets/logo48px.png';

import SpotList from '../components/SpotList'

export default function List() {
    const [techs, setTechs] = useState([]); // recebe array vazio

    useEffect(() => {
        //vou no AsyncStore onde salvei as informacoes no login e busco a info de techs
        AsyncStorage.getItem('techs').then(storagedTechs => {
            //split(',') joga cada informação entre as virgulas num array
            //.map(tech => tech.trim()) percorre cada uma da sposicoes e retira os espaços
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);
    // <SpotList tech='Reactjjj'></SpotList>
    // {techs.map(tech - percorre o meu array de tecnologias, e para cada tecnologia 
    // cada vez que utiliza uma estrutura de repetição como o map, precisa da prop key pra identificar cada uma das tecnologias
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />


            {techs.map(tech =>  <SpotList key={tech} tech={tech} />
            
            )}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: "contain", //que o conteudo da imagem fique no espaço disponível
        alignSelf: "center",
        marginTop: 38,
    }
});