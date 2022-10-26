import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import OnBoardScreen from '../screens/OnBoardScreen';

const Stack = createStackNavigator();

const StackNavigaton = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigaton;
