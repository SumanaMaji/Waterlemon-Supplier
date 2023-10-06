import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './navigation/index';
import { enableScreens } from 'react-native-screens';

enableScreens();
const App = () => {
  

  return (
    <SafeAreaProvider>
    <Routes />
    </SafeAreaProvider>
  );
};

export default App;


