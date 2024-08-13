import React, { useState } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToggleAuth from '../../components/ToggleAuth';

import { images } from '../../constants';

const AuthLayout = () => {
    const [currentPage, setCurrentPage] = useState('login');

    return (
        <>
            <SafeAreaView className="flex-1 bg-white">
                {/* Background Image */}
                <Image
                    source={images.background_logo}
                    className="absolute bottom-0 right-0 w-[100vw]"
                />
                <ScrollView>
                    <View className="flex-1 justify-center items-center px-4 py-6 mt-0 pt-0 h-full">
                        <Image
                            source={images.logo}
                            className="w-[130px] h-[130px] self-center mt-12 mb-12"
                            resizeMode="contain"
                        />
                        <ToggleAuth currentPage={currentPage} setCurrentPage={setCurrentPage} />

                        {/* Content from LogIn or SignUp pages */}
                        <Slot />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <StatusBar backgroundColor="#FFFFFF" style="dark" />
        </>    
    )
}

export default AuthLayout