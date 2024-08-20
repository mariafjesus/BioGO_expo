import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "nativewind";
import { icons } from '../constants';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const { colorScheme } = useColorScheme();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`${otherStyles} rounded-xl w-full h-16 px-4 bg-white shadow-xl shadow-blue flex flex-row items-center dark:bg-primary`}>
            <TextInput
                className="flex-1 text-primary font-psemibold text-lg h-16 dark:text-white"
                value={value}
                placeholder={placeholder}
                placeholderTextColor={ colorScheme === "light" ? "#838383" : "#D9D9D9"}
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword }
            />

            {title === "Password" && (
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Image
                        className="w-6 h-6"
                        source={showPassword ? icons.eye : icons.eye_hide }
                        tintColor={ colorScheme === "light" ? "#201E50" : "#FFFFFF"}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default FormField
