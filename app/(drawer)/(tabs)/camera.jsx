import { View, Image } from "react-native";
import HMenu from "../../../components/HMenu";
import { images } from "../../../constants";

const Camera = () => {
    return (
        <View className="h-full bg-white dark:bg-primary">
            {/*Header*/}
            <HMenu />

            {/* Background Image */}
            <Image 
                source={images.background_logo}
                className="absolute bottom-0 right-0 w-[100vw]"
            />
        </View>
    )
}

export default Camera