import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons, images } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
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
            {/* Background Image */}
            <Image 
                source={images.background_logo}
                className="absolute bottom-0 right-0 w-[100vw]"
            />
            {/* Menu */}
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#201E50',
                    tabBarInactiveTintColor: '#838383',
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        borderTopWidth: 1,
                        borderTopColor: '#307BDD',
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
        </>
    )
}

export default TabsLayout