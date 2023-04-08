import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';

const Pilha = createStackNavigator();

export default function Routers() {
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name = 'Home'
                    component={Home}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}