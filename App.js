import React from 'react';
   import { StatusBar } from "expo-status-bar";
   import { View } from "react-native";
   import { GestureHandlerRootView } from 'react-native-gesture-handler';
   import AppNavigator from './src/navigation/AppNavigator';

   export default function App() {
     return (
       <GestureHandlerRootView style={{ flex: 1 }}>
         <View style={{ flex: 1 }}>
           <AppNavigator />
           <StatusBar style="auto" />
         </View>
       </GestureHandlerRootView>
     );
   }
