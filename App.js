import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/components/Home';
import ListItems from './assets/components/ListItems';
import MapView1 from './assets/components/MapView1';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="ListItems" component={ListItems} options={{ title: 'Popular Places' }}/>
      <Stack.Screen name="MapView1" component={MapView1} options={{ title: 'Saved Places' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;