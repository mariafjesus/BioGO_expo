import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { icons } from '../../constants'

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity
                onPress={() => props.navigation.closeDrawer()}
                className="h-10 w-10 absolute top-8 right-4"
            >
                <Image
                    source={icons.close}
                    tintColor="#201E50"
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
            <TouchableOpacity className="flex-row mx-6 py-2 content-center w-fit w-auto inline-block">
                <Image
                    source={icons.logout}
                    tintColor="#201E50"
                    className="h-8 w-8"
                    resizeMode="contain"
                />
                <Text className="font-psemibold text-primary text-lg pl-2">
                    Logout
                </Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}

const DrawerLayout = () => {
    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    screenOptions={{ headerShown: false }}
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                />
            </GestureHandlerRootView>
        </>
    );
}

export default DrawerLayout