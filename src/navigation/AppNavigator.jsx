//viene de pnpm expo add @react-navigation/native
import {NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack.jsx";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {COLORS} from "../shared/constants/theme"


const AppNavigator = ()=>{
    return(
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
});

export default AppNavigator;
  