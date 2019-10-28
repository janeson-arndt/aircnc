import React, { useState } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
//TouchableOpacity - Para dar uma opacidade ao clicar no botão
//KeyboardAvoidingView com a propriedade behavior='padding' - para ajustar a tela quando se abre o teclado, caso contrario o teclado fica por cima de tudo
// AsyncStorage - base local do dispositivo, como o LocalStorage da web
import api from '../services/api';

import logo from '../assets/icon51.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState(''); //armazena no state as informações das variáveis
    const [techs, setTechs] = useState('');

    async function handleSubmit() {
        //email, techs
        //console.log(email, techs);
        // Chamada da API
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        //console.log(_id);// valida de o id do usuário esta chegando nessa parte da aplicação

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        // mandar o usuário para a proxima tela
        navigation.navigate('List');
    }


    return <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Image style={styles.logo} source={logo}></Image>
        <View style={styles.form}>
            <Text style={styles.label}>SEU E-MAIL *</Text>
            <TextInput
                style={styles.input}
                placeholder='Seu e-mail'
                placeholderTextColor='#999'
                keyboardType='email-address' /*informa que o tipo de teclado é para e-mail, faz o teclado ter o @*/
                autoCapitalize="none"/*Para não prencher a primeira letra como maiúsculo*/
                autoCorrect={false}/*para não aplicar a autocorreção do texto*/
                value={email}
                onChangeText={setEmail} //seta para a variável o valor do texto de e-mail
            ></TextInput>

            <Text style={styles.label}>TECNOLOGIAS *</Text>
            <TextInput
                style={styles.input}
                placeholder='Tecnologias de interesse'
                placeholderTextColor='#999'
                autoCapitalize="words"/*primeira letra da palavra coloca me caixa alta*/
                autoCorrect={false}/*para não aplicar a autocorreção do texto*/
                value={techs}
                onChangeText={setTechs} //seta para a variável o valor do texto de tecnologias
            ></TextInput>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Encontrar spots</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3E2A9"
    },
    logo: {
        borderRadius: 20,
    },
    form: {
        alignSelf: "stretch",
        paddingHorizontal: 30,
        marginTop: 30,
    },
    label: {
        fontWeight: "bold",
        color: '#444',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DBA901',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },
    button: {
        height: 42,
        backgroundColor: '#DBA901',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }

});