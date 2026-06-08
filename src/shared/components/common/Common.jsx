import { View, Text, ActivityIndicator, StyleSheet, } from "react-native-web";
import { COLORS, SPACING, FONT_SIZE } from "../../constants/theme";

//es un spinner
const LoginSpinner = ()=>{
    //el actiityindicator permite saber que es un spinner
    <View>
        <ActivityIndicator 
            size="large" color={COLORS.primary}
        />
    </View>
}
//COMPONENTE OPTIMIZADO POR QUE NO USAMOS RETURN
export const EmptyState = ({message = "No hay datos disponibles"}) =>(
    <View style={style.center}>
        <Text style={StyleSheetList.emptyText}>{message}</Text>
    </View>        
)

export const Cart = ({ children, style}) =>{
    <View style={[StyleSheetList.card, style]}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 150,
    },
    card: {
        backgroundColor: COLORS.surface,
        padding: SPACING.md,
        borderRadius: 12,
        marginVertical: SPACING.sm,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    emptyText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.secondary,
        textAlign: "center",
    },
});