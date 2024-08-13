import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';

const ToggleAuth = ({ currentPage, setCurrentPage }) => {
    const router = useRouter();
    const animation = useRef(new Animated.Value(0)).current;

    // Get the width of the screen
    const { width: screenWidth } = useWindowDimensions();
    const tabWidth = screenWidth * 0.45;

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
        outputRange: [0, tabWidth],
    });

    return (
        <View className="flex flex-row justify-center items-center w-full">
            <TouchableOpacity onPress={() => handlePress('login')}>
                <Text className={`text-2xl font-psemibold ${currentPage === 'login' ? ' text-primary' : 'text-gray-200'} px-10`}>
                    Log In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('signup')}>
                <Text className={`text-2xl font-psemibold ${currentPage === 'signup' ? ' text-primary' : 'text-gray-200'} px-10`}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <Animated.View 
                className="absolute bg-primary rounded-xl h-1 w-[45%]"
                style={{
                    bottom: -5,
                    left: linePosition,
                }}
            />
        </View>
    );
};

export default ToggleAuth;