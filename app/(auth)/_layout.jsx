import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import ToggleAuth from "../../components/ToggleAuth";
import { images } from "../../constants";

const AuthLayout = () => {
    const { colorScheme } = useColorScheme();
    const [currentPage, setCurrentPage] = useState("login");

    return (
        <>
            <SafeAreaView className="flex-1 bg-white dark:bg-primary">
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

                        <Slot />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <StatusBar backgroundColor={colorScheme === "light" ? "#FFFFFF" : "#201E50" } style={colorScheme === "light" ? "dark" : "light"} />
        </>    
    )
}

export default AuthLayout