import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useColorScheme } from "nativewind";
import { logOut } from '../../lib/appwrite';
import { icons } from '../../constants';

const CustomDrawerContent = (props) => {
    const logout = async () => {
        try {
            await logOut();
            router.replace("/log-in");
        } catch (error) {
            Alert.alert('Error', error.message);
        }       
    }

    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity
                onPress={() => props.navigation.closeDrawer()}
                className="h-10 w-10 absolute top-8 right-4"
            >
                <Image
                    source={icons.close}
                    tintColor={ colorScheme === "light" ? "#201E50" : "#FFFFFF"}
                    className="h-10 w-10"
                    resizeMode="contain"
                />
            </TouchableOpacity>
            {/*<DrawerItem
                icon={({ color, size }) => (
                    <Image
                        source={icons.home}
                        tintColor={color}
                        className="h-8 w-8"
                        resizeMode="contain"
                    />
                )}
                label="Home"
                onPress={() => router.push('/(drawer)/(tabs)/home')}
            />*/}
            <View className="h-12" />
            <TouchableOpacity
                className="flex-row mx-8 py-2 content-center rounded-full bg-primary dark:bg-white"
                onPress={toggleColorScheme}
            >
                <Image
                    source={colorScheme === "light" ? icons.moon : icons.sun}
                    tintColor={ colorScheme === "light" ? "#FFFFFF" : "#201E50"}
                    className="h-8 w-8 mx-2"
                    resizeMode="contain"
                />
                <Text className="font-psemibold text-white text-lg dark:text-primary w-36 text-center">
                    {colorScheme === "light" ? "Dark Mode" : "Light Mode"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="flex-row mx-6 py-2 content-center w-fit w-auto inline-block"
                onPress={logout}
            >
                <Image
                    source={icons.logout}
                    tintColor={ colorScheme === "light" ? "#201E50" : "#FFFFFF"}
                    className="h-8 w-8"
                    resizeMode="contain"
                />
                <Text className="font-psemibold text-primary text-lg pl-2 dark:text-white">
                    Logout
                </Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}

const DrawerLayout = () => {
    const { colorScheme } = useColorScheme();
    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    screenOptions={colorScheme === "light" ? {
                        headerShown: false,
                        drawerStyle:{backgroundColor: "#FFFFFF"}
                    } : {
                        headerShown: false,
                        drawerStyle:{backgroundColor: "#201E50"}
                    }}
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                />
            </GestureHandlerRootView>
        </>
    );
}

export default DrawerLayout