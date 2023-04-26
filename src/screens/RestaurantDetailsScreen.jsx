import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import restaurants from "../../assets/data/restaurants.json";

export default function RestaurantDetailsScreen() {
    const restaurant = restaurants[0];
    return (
    <SafeAreaView style={styles.page}>
        <TouchableOpacity style={styles.backButton}>
            <Text>Back</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{uri: restaurant.image}} resizeMode='cover'/>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min</Text>
        <Text>{restaurant.rating}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    backButton:{
        position: 'absolute',
        top: 25,
        left:25,
        padding:10,
        height:40, 
        width:40,
        borderRadius: 20,
        backgroundColor:"white",
        zIndex:50,
        justifyContent: "center",
        alignItems:"center"
    },
    image:{
        width:"100%",
        aspectRatio:4/3,
    },
    page:{
        flex:1,
    },
    subtitle:{
        color:"gray",
        fontSize:15,
    },
    title:{
        fontSize:35,
        fontWeight:600,
        marginVertical:10,
    },
})