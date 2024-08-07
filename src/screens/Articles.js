import React, { useState } from "react"; // Importation de React et du hook useState depuis React
import { Button, View } from "react-native"; // Importation des composants Button et View depuis React Native
import Article from "../components/Article"; // Importation du composant Article

// Composant ButtonComponent qui représente un bouton individuel avec son propre état
const ButtonComponent = ({ index }) => {
  // Déclaration d'un état local showChild pour contrôler l'affichage du composant Article
  const [showChild, setShowChild] = useState(false);

  return (
    <View>
      {/* Bouton avec un titre dynamique basé sur l'état showChild */}
      <Button
        title={
          showChild ? `Hide Component ${index}` : `Show Component ${index}`
        }
        // Gestionnaire d'événement pour le clic du bouton
        // Bascule l'état showChild entre true et false
        onPress={() => setShowChild(!showChild)}
      />
      {/* Affichage conditionnel du composant Article basé sur l'état showChild */}
      {showChild && <Article />}
    </View>
  );
};

// Composant principal Articles qui rend plusieurs ButtonComponent
export default function Articles() {
  // Création d'un tableau de ButtonComponent avec des indices de 1 à 4
  const buttons = [1, 2, 3, 4].map((index) => (
    <ButtonComponent key={index} index={index} />
  ));

  return (
    // Rendu des boutons dans une vue
    <View>{buttons}</View>
  );
}
