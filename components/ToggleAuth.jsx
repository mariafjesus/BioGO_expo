import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";

const ToggleAuth = ({ currentPage, setCurrentPage }) => {
    const router = useRouter();
    const animation = useRef(new Animated.Value(0)).current;

    // Get the width of the screen
    const { width: screenWidth } = useWindowDimensions();
    const startPlace = screenWidth * 0.05;
    const tabWidth = screenWidth * 0.50;

    const handlePress = (page) => {
        if (currentPage !== page) {
            Animated.timing(animation, {
                toValue: page === 'login' ? 0 : 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
            setCurrentPage(page);
            router.replace(page === 'login' ? '/log-in' : '/sign-up');
        }
    };

    const linePosition = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [startPlace, tabWidth],
    });

    return (
        <View className="flex flex-row justify-center items-center w-[100vw]">
            <TouchableOpacity onPress={() => handlePress('login')} className="w-[45vw]">
                <Text className={`text-2xl font-psemibold text-center ${currentPage === 'login' ? ' text-primary dark:text-white' : 'text-gray-200 dark:text-gray-100'}`}>
                    Log In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('signup')} className="w-[45vw]">
                <Text className={`text-2xl font-psemibold text-center ${currentPage === 'signup' ? ' text-primary dark:text-white' : 'text-gray-200 dark:text-gray-100'}`}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <Animated.View 
                className="absolute bg-primary rounded-xl h-1 w-[45vw] dark:bg-white"
                style={{
                    bottom: -5,
                    left: linePosition,
                }}
            />
        </View>
    );
};

export default ToggleAuth;