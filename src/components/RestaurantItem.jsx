import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

function RestaurantItem({restaurant}) {
  return (
    <View key={restaurant.id} style={styles.restaurantContainer}>
        <Image source={{uri:restaurant.image}} style={styles.image}/>
        <View style={styles.textContainer}>
            <View>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min</Text>
            </View>
            <View style={styles.rating}>
                <Text>{restaurant.rating}</Text>
            </View>
            </View>
      </View>
  )
}

const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical:10,
      },
      image:{
        width: "100%",
        aspectRatio: 5/3,
        marginBottom:5,
      },
      title:{
        fontSize:20,
        fontWeight:"bold",
        marginVertical: 5,
      },
      subtitle:{
        color: "gray"
      },
      rating:{
        backgroundColor:"lightgray",
        borderRadius: 20,
        padding:5,
        justifyContent: "center",
        alignItems: "center",
        width:30,
        height:30,
      },
      textContainer:{
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems: "center"
      },
});

export default RestaurantItem