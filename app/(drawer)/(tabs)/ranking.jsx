import React from 'react'
import { View, Image } from 'react-native'

import { images } from '../../../constants'
import HMenu from '../../../components/HMenu'

const Ranking = () => {
    return (
        <View className="h-full bg-white">
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

export default Ranking