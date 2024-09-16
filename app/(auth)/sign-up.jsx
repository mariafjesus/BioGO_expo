import React, { useState } from 'react'
import { router } from "expo-router";
import { View, Alert } from 'react-native'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import { useTranslation } from "react-i18next";

const SignUp = () => {
    const { t } = useTranslation();
    const {setUser, setLoggedIn} = useGlobalContext();

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        cofirmPassword: '',
    })
    
    const [isSubmitting, setSubmitting] = useState(false);

    const submit = async () => {
        if (form.username === "" || form.email === "" || form.password === "" || form.confirmPassword === "") {
            Alert.alert('Error', 'Please fill in all the fields');
            return
        }

        if (form.confirmPassword) {
            Alert.alert('Error', "Passwords don't match");
            return
        }

        setSubmitting(true);

        try {
            const result = await createUser(form.email, form.password, form.username);
            setUser(result);
            setLoggedIn(true);

            router.replace("/home");
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <View className="w-full">
            <FormField
                title="Username"
                placeholder={t('auth.username')}
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-7"
            />

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
            <FormField
                title="Password"
                placeholder={t('auth.confirm_password')}
                value={form.confirmPassword}
                handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                otherStyles="mt-7"
            />

            <CustomButton
                title={t('auth.signup')}
                handlePress={submit}
                containerStyles="w-full mt-7"
                isLoading={isSubmitting}
            />
        </View>
    )
}

export default SignUp