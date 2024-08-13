import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <Image 
        source={images.background_logo}
        className="absolute bottom-0 right-0 w-[100vw]"
      />
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[130px] mb-16"
            resizeMode="contain"
          />

          <Text className="text-3xl font-pbold text-center text-primary">
            Have fun exploring Nature!
          </Text>

          <Text className="text-sm font-pregular text-center text-primary">
            Identify, collect and learn more about the biodiversity around you with BioGO
          </Text>

          <CustomButton
            title="Continue"
            handlePress={() => router.push('/log-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </SafeAreaView>
  );
}
