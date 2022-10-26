import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import COLORS from './src/consts/colors';
import StackNavigaton from './src/views/navigations/StackNavigaton';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <StackNavigaton />
    </NavigationContainer>
  );
};

export default App;
