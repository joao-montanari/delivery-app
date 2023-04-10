import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';
import SignIn from './src/pages/signin';
import SignUp from './src/pages/signup';
import Shopping from './src/pages/shopping';

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
                <Pilha.Screen
                    name = 'SignIn'
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'SignUp'
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Shopping'
                    component={Shopping}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}