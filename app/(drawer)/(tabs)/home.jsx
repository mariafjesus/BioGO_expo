import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";
import HMenu from "../../../components/HMenu";
import { images } from "../../../constants";

const Home = () => {
    const { colorScheme } = useColorScheme();

    return (
        <View className="h-full bg-white dark:bg-primary">
            {/* Header */}
            <HMenu />
            {/* Background Image */}
            <Image 
                source={images.background_logo}
                className="absolute bottom-0 right-0 w-[100vw]"
            />
            <ScrollView>
                <View className="pb-24 pt-12 px-4">
                    {/*<FlatList
                        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                        keyExtractor={(item) => item.$id}
                        renderItem={({ item }) => (
                            <Text className="text-3xl font-psemibold">{item.id}</Text>
                        )}
                    />*/}
                    <Text className="text-primary dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text className="text-primary dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text className="text-primary dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    <Text className="text-primary dark:text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                </View>
            </ScrollView>
            <LinearGradient
                colors={colorScheme === "light" ? ['transparent', 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 1)'] : ['transparent', 'rgba(32, 30, 80, 0.9)', 'rgba(32, 30, 80, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="h-32 w-full absolute bottom-0 "
            />
            <LinearGradient
                colors={colorScheme === "light" ? ['rgba(255, 255, 255, 1)','rgba(255, 255, 255, 0.9)','transparent'] : ['rgba(32, 30, 80, 1)','rgba(32, 30, 80, 0.9)','transparent']}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 1 }}
                className="h-16 w-full absolute top-0"
            /> 
        </View>
    )
}

export default Home