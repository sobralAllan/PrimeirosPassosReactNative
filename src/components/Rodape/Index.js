import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Rodape(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Rodapé
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 260,
        marginLeft: 50,
        flex: 1,
        backgroundColor: '#123fff',
        borderRadius: 100,
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: '#12ffaa',
        width: 400,
        borderRadius: 100,
        textAlign: 'center',
    },
});