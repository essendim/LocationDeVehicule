import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Article from '../components/Article';

export default function UseEffectDemo({ navigation }) {

    const [afficherMaDemo, updateDemo] = useState(false);
    const [afficherMaDemo1, updateDemo1] = useState(false);
    const [afficherMaDemo2, updateDemo2] = useState(false);




    return (
        <View>
            <Text style={styles.TextTitre}>Demo de UseEffect</Text>
            <TouchableOpacity style={styles.button} onPress={() => updateDemo(!afficherMaDemo)}>
                <Text style={styles.buttonText}>Demo de UseEffect</Text>
            </TouchableOpacity>
            {afficherMaDemo && <Article />}
            <TouchableOpacity style={styles.button} onPress={() => updateDemo1(!afficherMaDemo1)}>
                <Text style={styles.buttonText}>Demo de UseEffect</Text>
            </TouchableOpacity>
            {afficherMaDemo1 && <Article />}
            <TouchableOpacity style={styles.button} onPress={() => updateDemo2(!afficherMaDemo2)}>
                <Text style={styles.buttonText}>Demo de UseEffect</Text>
            </TouchableOpacity>
            {afficherMaDemo2 && <Article />}
        </View>
    );
}

const styles = StyleSheet.create({
    TextTitre: {
        color: '#fff',
        fontSize: 25,
    },
    button: {
        backgroundColor: 'red',
    },
    buttonText: {
        // Ajoutez les styles du texte du bouton ici
    }
});
