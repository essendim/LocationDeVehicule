import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Article() {
    const [timer, updateTimer] = useState(0);


    useEffect(() => {
        let prevTimer = 0;
        let idSetInterval = setInterval(() => {
            updateTimer(prevTimer = prevTimer + 1);
        }, 1000);

        console.log(idSetInterval);

        return () => {
            clearInterval(idSetInterval);
        }

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>temps de lecture : {timer} Secondes</Text>
            <Text style={styles.title}>Titre de l'article</Text>
            <Text style={styles.text}>Texte de l'article</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
});
