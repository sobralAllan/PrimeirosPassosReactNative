import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Titulo(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Título
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 250,
        flex: 1,
        backgroundColor: '#123fff',
        marginLeft: 50,
        borderColor: '#2311ff',
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