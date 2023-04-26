import React from 'react'
import { FlatList,StyleSheet } from 'react-native'
import restaurants from "../../assets/data/restaurants.json";
import RestaurantItem from '../../src/components/RestaurantItem';

export default function HomeScreen() {
  return (
    <FlatList data={restaurants} showsVerticalScrollIndicator={false} style={styles.list} renderItem={({item})=> (
      <RestaurantItem restaurant={item}/>
    )}/>
  )
}

const styles = StyleSheet.create({
    list: {
      paddingHorizontal: 10
    },
  });