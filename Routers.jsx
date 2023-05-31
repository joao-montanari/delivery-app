import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';
import SignIn from './src/pages/signin';
import SignUp from './src/pages/signup';
import Shopping from './src/pages/shopping';
import Cart from './src/pages/cart';
import User from './src/pages/user';
import Buy from './src/pages/buy';

import Vegetables from './src/pages/categories/vegetables';
import Salads from './src/pages/categories/salads';
import Fruits from "./src/pages/categories/fruits";
import Sauces from './src/pages/categories/sauces';
import Fish from './src/pages/categories/fish';
import Cultivation from './src/pages/categories/cultivation';
import Plants from './src/pages/categories/plants';
import Kitchen from './src/pages/categories/kitchen';

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
                    name = 'Cart'
                    component={Cart}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'User'
                    component={User}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Buy'
                    component={Buy}
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