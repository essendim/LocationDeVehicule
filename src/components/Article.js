import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function Article() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    let idSetInterval = setInterval(() => {
      setCount((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(idSetInterval);
  });

  return (
    <View>
      <Text>ArticleTitle</Text>
      <Text>Description</Text>
      <Text>Temps de lecture : {count}</Text>
    </View>
  );
}
