import React from 'react'
import { View, Text, Image } from 'react-native'

import { images } from '../../constants'

const Ranking = () => {
    return (
        <View className="h-full bg-white">
            {/* Background Image */}
            <Image 
                    source={images.background_logo}
                    className="absolute bottom-0 right-0 w-[100vw]"
                />
            <Text>Ranking</Text>
        </View>
    )
}

export default Ranking