import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`rounded-xl min-h-[55] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <LinearGradient
                colors={['#307BDD', '#5FBF00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className={`rounded-xl min-h-[55] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            >
                <Text className={`text-white font-psemibold text-xl ${textStyles}`}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton
