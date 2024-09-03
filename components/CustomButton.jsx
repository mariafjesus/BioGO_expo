import { TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading, icon, iconStyles, iconColor }) => {
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
                <Text className={`text-white font-psemibold text-xl ${textStyles} dark:text-primary`}>
                    {title}
                </Text>
                <Image
                    source={icon}
                    resizeMode="contain"
                    className={iconStyles}
                    tintColor={iconColor}
                />
                
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton
