import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ResturantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    log,
    lat
}) => {
  return (
    <TouchableOpacity>
        <Image 
        source={{
            uri:imgUrl
        }}
        className="h-36 w-64 rounded-sm"
        />
        <View>
            <Text className="pt-2 font-bold text-lg">{title}</Text>            
        </View>
    </TouchableOpacity>
  )
}

export default ResturantCard