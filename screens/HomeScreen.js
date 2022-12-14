import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { styled } from "nativewind";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon} from 'react-native-heroicons/outline'
// import {ChevronDownIcon} from 'react-native-heroicons/outline'
// import { SparklesIcon } from "react-native-heroicons/solid";
import * as Icons from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
  navigation.setOptions({
  headerShown:false
})
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <Text> */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image source={{uri:'https://links.papareact.com/wru'}} className="h7 w-7 bg-gray-300 p-4 rounded-full"/>
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
        <Text className="font-bold text-xl">
          Current Locations <Icons.ChevronDownIcon size={20} color="#00CCBB"/>
         </Text>
      </View>
      <Icons.UserIcon size={35} color="#00CCBB"/>
      </View> 
      {/*search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <Icons.MagnifyingGlassIcon color="gray" size={20}/>
          <TextInput placeholder='Resturants and Cuisines' keyboardType='default'/>
        </View>
        <Icons.AdjustmentsHorizontalIcon color="#00CCBB"/>
      </View> 
      {/*Body*/}
      <ScrollView className="bg-gray-100" contentContainerStyle={{
        paddingBottom:100
      }}>
        {/*Categories*/}
        <Categories/>
        {/*Featured Row*/}
        <FeaturedRow title="featured" description="Paid placement from our Partners" id="1"/>
        <FeaturedRow title="featured" description="Paid placement from our Partners" id="2"/>
        <FeaturedRow title="featured" description="Paid placement from our Partners" id="3"/>

      </ScrollView>

    </SafeAreaView>
  )
}