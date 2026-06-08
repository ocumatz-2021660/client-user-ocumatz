// viene de pnpm expo install @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../features/auth/screens/LoginScreen.jsx";
import RegisterScreen from "../features/auth/screens/RegisterScreen.jsx"

//va contener las rutas
const Stack = createNativeStackNavigator()

const AuthStack = ()=>{
    return(        
<Stack.Navigator
    screenOptions={{
        //para que la barra de notificaciones no desaparesca (carga hora etc)
        headerShown: false
    }}
>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen}/>
</Stack.Navigator>
    )
}

export default AuthStack;