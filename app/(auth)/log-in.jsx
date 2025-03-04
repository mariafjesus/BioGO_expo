import React, { useState } from "react";
import { router } from "expo-router";
import { View, Alert } from "react-native";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { getCurrentUser, logIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useTranslation } from "react-i18next";

const LogIn = () => {
    const { t } = useTranslation();
    const {setUser, setLoggedIn} = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert('Error', 'Please fill in all the fields')
            return;
        }

        setSubmitting(true);

        try {
            await logIn(form.email, form.password);
            const result = await getCurrentUser();
            setUser(result);
            setLoggedIn(true);

            router.replace("/home");
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <View className="w-full">
            <FormField
                title="Email"
                placeholder={t('auth.email')}
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
            />
            <FormField
                title="Password"
                placeholder={t('auth.password')}
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
            />

            <CustomButton
                title={t('auth.login')}
                handlePress={submit}
                containerStyles="w-full mt-7"
                isLoading={isSubmitting}
            />
        </View>
    )
}

export default LogIn