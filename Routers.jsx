import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';
import SignIn from './src/pages/signin';
import SignUp from './src/pages/signup';
import Shopping from './src/pages/shopping';
import Vegetables from './src/pages/vegetables';
import Salads from './src/pages/salads';
import Fruits from "./src/pages/fruits";
import Sauces from './src/pages/sauces';
import Fish from './src/pages/fish';
import Cultivation from './src/pages/cultivation';
import Plants from './src/pages/plants';
import Kitchen from './src/pages/kitchen';

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
                <Pilha.Screen
                    name = 'Vegetables'
                    component={Vegetables}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Salads'
                    component={Salads}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Fruits'
                    component={Fruits}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Sauces'
                    component={Sauces}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Fish'
                    component={Fish}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Cultivation'
                    component={Cultivation}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Plants'
                    component={Plants}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Kitchen'
                    component={Kitchen}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}