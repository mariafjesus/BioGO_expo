import { Text, TouchableOpacity, View, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";
import { icons } from "../constants";

const HMenu = () => {
    const { colorScheme } = useColorScheme();
    const navigation = useNavigation();

    return (
        <View className="w-full py-2 z-10 top-0 h-16 absolute">
            <Text className="color-primary font-psemibold text-3xl text-center dark:color-white">BioGO</Text>
            <TouchableOpacity 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                className="absolute top-2 left-4"
            >
                <Image
                    className="h-8 w-8"
                    source={icons.menu_lines}
                    resizeMode="contain"
                    tintColor={colorScheme === "light" ? "#201E50" : "#FFFFFF"}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HMenu
