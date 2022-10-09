import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Categorycard from './Categorycard'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'
import food4 from '../assets/food4.jpg'
import food5 from '../assets/food5.jpg'

const Categories = () => {
  return (
    <ScrollView horizontal showHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15,
    paddingTop:10
    }}>
        {/*Category card*/}
        <Categorycard imgUrl="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" title="Testing 1"/>
        <Categorycard imgUrl="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" title="Testing 2"/>
        <Categorycard imgUrl="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" title="testing 3"/> 
        <Categorycard imgUrl="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" title="testing 3"/> 
        <Categorycard imgUrl="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" title="testing 3"/> 
        <Categorycard imgUrl="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" title="testing 3"/> 

      {/* <Text>Categories</Text> */}

    </ScrollView>
  )
}

export default Categories