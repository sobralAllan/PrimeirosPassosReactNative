import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Conteudo(){
    return(
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.texto}>
                    Conteúdo
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe a altura"
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Informe o peso"
                    keyboardType='numeric'
                    
                />
                <Button 
                   style={styles.botao}
                   title="Cadastrar"
                   
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 260,
        height: 100,
        marginLeft: 50,
        flex: 1,
        backgroundColor: '#123fff', 
        borderRadius: 100,
    },
    conteudo:{
        width: 300,
        alignItems: 'center',
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: '#12ffaa',
        width: 400,
        borderRadius: 100,
        textAlign: 'center',
    },
    input:{
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00aaff',
        width: 250,
        fontSize: 20,
    },
    botao:{
        marginTop: 20,
        paddingTop: 20,
        backgroundColor: '#12aa00',
    }
});