import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className={`items-center justify-center py-3 w-24 ${focused ? 'rounded-xl bg-white' : ''}`}>
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
    return (
        <>
            <SafeAreaView className="flex-1 bg-white">
                {/* Menu */}
                <Tabs
                    screenOptions={{
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
                    }}
                >
                    <Tabs.Screen
                        name="home"
                        options={{
                            title: 'Home',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.home}
                                    color={color}
                                    name="Home"
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="camera"
                        options={{
                            title: 'Camera',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.camera}
                                    color={color}
                                    name="Camera"
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="map"
                        options={{
                            title: 'Map',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.map}
                                    color={color}
                                    name="Map"
                                    focused={focused}
                                />
                            )
                        }}
                    />
                    <Tabs.Screen
                        name="ranking"
                        options={{
                            title: 'Ranking',
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={icons.medal}
                                    color={color}
                                    name="Ranking"
                                    focused={focused}
                                />
                            )
                        }}
                    />
                </Tabs>
                <StatusBar backgroundColor="#FFFFFF" style="dark" />
            </SafeAreaView>
        </>
    )
}

export default TabsLayout