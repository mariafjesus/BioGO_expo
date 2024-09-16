import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useTranslation } from 'react-i18next';
import { useGlobalContext } from "../context/GlobalProvider";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";

export default function App() {
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation();
  const {isLoading, isLoggedIn} = useGlobalContext();
  
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-white h-full dark:bg-primary">
      <Image 
        source={images.background_logo}
        className="absolute bottom-0 right-0 w-full h-full"
      />
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[130px] mb-16"
            resizeMode="contain"
          />

          <Text className="text-3xl font-pbold text-center text-primary dark:text-white">
            {t('index.title')}
          </Text>

          <Text className="text-sm font-pregular text-center text-primary dark:text-white">
            {t('index.subtitle')}
          </Text>

          <CustomButton
            title={t('button.continue')}
            handlePress={() => router.push('/log-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={colorScheme === "light" ? "#FFFFFF" : "#201E50" } style={colorScheme === "light" ? "dark" : "light"} />
    </SafeAreaView>
  );
}
