import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import {TailwindProvider} from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'; {/*Help us to navigate through the app*/}
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator(); {/*here we will provide the screens*/}
export default function App() {
  return (
    <NavigationContainer> 
          {/* <TailwindProvider> */}
          <Stack.Navigator> 
          <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
          {/* </TailwindProvider>  */}
    </NavigationContainer>    
  );
}
