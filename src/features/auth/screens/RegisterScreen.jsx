import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView,Platform, ScrollView,Alert } from 'react-native'
import {useForm, Controller} from 'react-hook-form'
import { COLORS, SPACING, FONT_SIZE} from '../../../shared/constants/theme';
import Input from '../../../shared/components/common/input';
import Button from '../../../shared/components/Button';
import KinalSportLogo from "../../../../assets/kinal_sports.png"

const RegisterScreen = ({navigation})=>{
    
    const { control, handleSubmit, formState: { errors}} = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            cell: "",
            email: "",
            password: "",
            confirmPassword: "",            
        }
    });

    const onSubmit = async(data)=>{

    }    

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent} >
                <View style={styles.header}>
                    <Image
                        source={KinalSportLogo}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.subtitle}>
                        Ingresa tus datos para continuar
                    </Text>
                </View>
                <View style={styles.form}>
                    <Controller
                        control={control}
                        rules={{required:"Este campo es obligatorio"}}
                        render={({field: {onChange, value}})=>(
                            <Input
                                label={"Nombre completo"}
                                placeholder="Oscar Sebastian"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                error={errors.firstName?.message}
                            />
                        )}
                        name="firstName"
                    />
                </View>
                <View style={styles.form}>
                    <Controller
                        control={control}
                        rules={{required: "Este campo es obligatorio"}}
                        render={({field: {onChange, value}})=>(
                            <Input
                                label={"Apellidos completos"}
                                placeholder="Cumatz López"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                error={errors.lastName?.message}
                            />
                        )}
                        name="lastName"
                    />
                </View>
                <Button
                    title="Registrarse"
                    onPress={handleSubmit(onSubmit)}
                    style={styles.button}
                />
                <View style={styles.footer}>
                    <Text styles={styles.footerText}>
                        ¿Ya tienes cuenta?
                        <Text style={styles.link}
                            onPress={() => navigation.navigate("Login")}>
                            Iniciar Sesion
                        </Text>
                    </Text>
                </View>
                
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        justifyContent: "center",
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xxl,
    },
    logo: {
        height: 80,
        width: 200,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SPACING.xl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "700",
    },
});

export default RegisterScreen