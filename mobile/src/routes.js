import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incedents from './pages/Incidents';
import Details from './pages/Details';

export default function Routes() {
 return (
    <NavigationContainer>

        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Incedents" component={ Incedents } />
            <AppStack.Screen name="Details" component={ Details } />
        </AppStack.Navigator>
        
    </NavigationContainer>
 );
}