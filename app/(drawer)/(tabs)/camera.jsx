import { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import HMenu from "../../../components/HMenu";
import { images, icons } from "../../../constants";
import { CameraView, useCameraPermissions } from "expo-camera";
import CustomButton from "../../../components/CustomButton";
import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";

const Camera = () => {
    const { colorScheme } = useColorScheme();
    const { t } = useTranslation();
    const [facing, setFacing] = useState("back");
    const [flash, setFlash] = useState("off");
    const [torch, setTorch] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const [content, setContent] = useState(<View />);

    function toggleCameraFacing() {
        setFacing(facing === "back" ? "front" : "back");
    }

    function toggleFlash() {
        setFlash(flash === "off" ? "on" : "off");
    }

    function toggleTorch() {
        setTorch(!torch);
    }

    useEffect(() => {
        if (permission) {
            if (!permission.granted) {
                setContent(
                    <View className="justify-center flex-1 mx-8">
                        <Text className="text-center font-psemibold text-primary dark:text-white text-lg">
                            {t('camera.ask_permission')}
                        </Text>
                        <CustomButton
                            title={t('button.grant_permission')}
                            handlePress={requestPermission}
                            containerStyles="w-full mt-2"
                        />
                    </View>
                );
            } else {
                setContent(
                    <View className="flex-1 mt-12 rounded-xl mb-24 rounded-lg center">
                        <CameraView facing={facing} flash={flash} enableTorch={torch} className="flex-1">
                            <View className="flex-row w-full items-center justify-around">
                                {/* Flash toggle */}
                                <TouchableOpacity
                                    className="bg-white w-12 h-12 rounded-full justify-center items-center mt-4 dark:bg-primary"
                                    onPress={toggleFlash}
                                >
                                    <Image
                                        source={flash === "on" ? icons.flash_on : icons.flash_off}
                                        className="w-8 h-8"
                                        tintColor={ colorScheme === "light" ? "#201E50" : "#FFFFFF"}
                                    />
                                </TouchableOpacity>

                                {/* Flashlight toggle */}
                                <TouchableOpacity
                                    className="bg-white w-12 h-12 rounded-full justify-center items-center mt-4 dark:bg-primary"
                                    onPress={toggleTorch}
                                >
                                    <Image
                                        source={icons.flashlight}
                                        className="w-8 h-8"
                                        tintColor={ colorScheme === "light" ? "#201E50" : "#FFFFFF"}
                                    />
                                </TouchableOpacity>

                                {/* Camera toggle */}
                                <TouchableOpacity
                                    className="bg-white w-12 h-12 rounded-full justify-center items-center mt-4 dark:bg-primary"
                                    onPress={toggleCameraFacing}
                                >
                                    <Image
                                        source={icons.camera_rotate} 
                                        className="w-8 h-8"
                                        tintColor={ colorScheme === "light" ? "#201E50" : "#FFFFFF"}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View className="absolute bottom-0 w-full flex-row justify-around pb-6 items-center">
                                {/* Photos Stack */}
                                <TouchableOpacity className="w-24 h-24">
                                    <View />
                                </TouchableOpacity>

                                {/* Camera Trigger */}
                                <TouchableOpacity>
                                    <Image
                                        source={icons.camera_trigger}
                                        className="w-24 h-24"
                                    />
                                </TouchableOpacity>

                                {/* Identify button */}
                                <CustomButton
                                    containerStyles="rounded-full w-24 h-24"
                                    icon={images.logo}
                                    iconStyles="w-16 h-16 absolute"
                                    iconColor={colorScheme === "light" ? "#FFFFFF" : "#201E50" }
                                />
                            </View>
                        </CameraView>
                    </View>
                );
            }
        }
    }, [permission, facing, flash, torch, colorScheme]);

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
    )
}

export default Camera