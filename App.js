import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetails from './src/screens/BookDecs';
import TabNavigation from './navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home Screen" component={TabNavigation} />
        <Stack.Screen name="Details" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
