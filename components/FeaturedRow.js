import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row item-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView 
        horizontal 
        showHorizontalScrollIndicator={false} 
        //inner padding style - inside
        contentContainerStyle={{paddingHorizontal:15}}
        //outer padding style
        className="pt-4"
        >
        {/*Resturant Cards*/}
        <ResturantCard 
            id="1"
            imgUrl="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
            title="North Indian"
            rating={4.9}
            genre="Indian"
            address="Bangalore"
            shortDescription="Best North Indian Meal"
            dishes={["Rice", "Roti", "Dalfry", "Chole", "Rajma"]}
            log={20}
            lat={10}
        />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow