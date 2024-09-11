import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import CustomButton from "../../../components/CustomButton";
import { useColorScheme } from "nativewind";
import HMenu from "../../../components/HMenu";
import { icons, images } from "../../../constants";

const Map = () => {
    const { colorScheme } = useColorScheme();
    const [location, setLocation] = useState(null);
    const [permissionStatus, setPermissionStatus] = useState(null);
    const [content, setContent] = useState(<View />);

    const requestLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        setPermissionStatus(status);
    };

    useEffect(() => {
        (async () => {
            const { status } = await Location.getForegroundPermissionsAsync();
            setPermissionStatus(status);

            if (status === 'granted') {
                const loc = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            }
        })();
    }, []);

    useEffect(() => {
        if (permissionStatus === null || permissionStatus !== 'granted') {
            setContent(
                <View className="justify-center flex-1 mx-8">
                    <Text className="text-center font-psemibold text-primary dark:text-white text-lg">
                        We need your permission to show your location on the map
                    </Text>
                    <CustomButton
                        title="Grant Permission"
                        handlePress={requestLocationPermission}
                        containerStyles="w-full mt-2"
                    />
                </View>
            );
        } else {
            setContent(
                <View className="flex-1 mt-12 mb-24">
                    <MapView
                        style={{ flex: 1 }}
                        region={location}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                    />
                </View>
            );
        }
    }, [permissionStatus, location, colorScheme]);

    return (
        <View className="h-full bg-white dark:bg-primary">
            {/* Header */}
            <HMenu />

            {/* Background Image */}
            <Image 
                source={images.background_logo}
                className="absolute bottom-0 right-0 w-full h-full"
            />
            {content}
        </View>
    );
};

export default Map