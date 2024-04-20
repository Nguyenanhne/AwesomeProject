import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/LoginScreen/Login';
import RegisterForm from './app/RegisterScreen/Register'; 
import FormLogin from './app/LoginScreen/Form';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={FormLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterForm} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}