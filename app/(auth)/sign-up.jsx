import React, { useState } from 'react'
import { router } from "expo-router";
import { View } from 'react-native'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        cofirmPassword: '',
    })
    
    const [isSubmitting, setSubmitting] = useState(false);

    const submit = async () => {
        setSubmitting(true);
        router.replace("/home");
        setSubmitting(false);
    }

    return (
        <View className="w-full">
            <FormField
                title="Email"
                placeholder="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
            />
            <FormField
                title="Password"
                placeholder="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
            />
            <FormField
                title="Password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                otherStyles="mt-7"
            />

            <CustomButton
                title="Sign Up"
                handlePress={submit}
                containerStyles="w-full mt-7"
                isLoading={isSubmitting}
            />
        </View>
    )
}

export default SignUp