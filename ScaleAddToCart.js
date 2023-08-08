import React, { Component, useRef, useState } from 'react'
import { Animated, Easing, Image, Text, TouchableOpacity, View } from 'react-native'



export default function App() {
   const [first, setfirst] = useState({
    x:0,y:0
   })
  const Moveable = useRef(new Animated.ValueXY(first)).current
  const Scale = useRef(new Animated.Value(5)).current
  const transform = () => {
    
      Animated.parallel([
        
        Animated.timing(Moveable, {
          toValue: {
            x:160,y:-590
          },
          useNativeDriver: false,
        })
      ,
      Animated.timing(Scale, {
        toValue: 0,
        duration: 700,
        useNativeDriver:true
      }),
      
      ])
      .start()
  
  }
  return (
    <View style={{padding: 20, marginTop: 10,justifyContent:'space-between',backgroundColor:'white',flex:0.8 }}>

  
      <Image
      source={{uri:"https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"}}
      style={{
        width:30,height:30,resizeMode:'contain',
        alignSelf:'flex-end',
        marginTop:20
      }}
      />
      <Animated.View style={[Moveable.getLayout(),{}]}>
      <TouchableOpacity onPress={() =>{ transform()}} style={[{ backgroundColor: 'black',width:60,height:10,alignSelf:'center',
      transform: [
              { 
                scale:Scale
               } 
            ] 
          }]}
            >
              <Text style={{color:'white',fontSize:8,textAlign:'center'}}>
                Add to cart
              </Text>

      </TouchableOpacity>
      </Animated.View>
    </View>
  )
}
