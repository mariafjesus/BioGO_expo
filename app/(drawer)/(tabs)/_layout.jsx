import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { icons } from "../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import { useTranslation } from 'react-i18next';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className={`items-center justify-center py-3 w-24 ${focused ? 'rounded-xl bg-white shadow-xl shadow-blue dark:bg-primary' : ''}`}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    const { colorScheme } = useColorScheme();
    const { t } = useTranslation();
    
    return (
        <>
            <SafeAreaView className="flex-1 bg-white dark:bg-primary">
                {/* Menu */}
                <Tabs
                    screenOptions={ colorScheme === "light" ? {
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: '#201E50',
                        tabBarInactiveTintColor: '#838383',
                        tabBarStyle: {
                            backgroundColor: 'transparent',
                            borderTopColor: 'transparent',
                            shadowColor: 'transparent',
                            position: 'absolute',
                            height: 85,
                        }
                    } : {
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: '#FFFFFF',
                        tabBarInactiveTintColor: '#D9D9D9',
                        tabBarStyle: {
                            backgroundColor: 'transparent',
                            borderTopColor: 'transparent',
                            shadowColor: 'transparent',
                            position: 'absolute',
                            height: 85,
                        }
                    }}
                >
                    <Tabs.Screen
                        name="home"
                        options={{
                            title: t('menu.home'),
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.home}
                                    color={color}
                                    name={t('menu.home')}
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="camera"
                        options={{
                            title: t('menu.camera'),
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.camera}
                                    color={color}
                                    name={t('menu.camera')}
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="map"
                        options={{
                            title: t('menu.map'),
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.map}
                                    color={color}
                                    name={t('menu.map')}
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="ranking"
                        options={{
                            title: t('menu.ranking'),
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.medal}
                                    color={color}
                                    name={t('menu.ranking')}
                                    focused={focused}
                                />
                            )
                        }}
                    />
                </Tabs>
                <StatusBar backgroundColor={colorScheme === "light" ? "#FFFFFF" : "#201E50" } style={colorScheme === "light" ? "dark" : "light"} />
            </SafeAreaView>
        </>
    )
}

export default TabsLayout