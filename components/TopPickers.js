import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {globalFonts, globalColors} from '../styles'

export default function TopPickers(title) {
    return (
        <View style={localStyles.pickersContainer}>
          <Text style={{fontFamily:globalFonts.semibold, fontSize:17, color: globalColors.lightBlack}}>{title.title}</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    pickersContainer:{
        flexDirection:'row',
        paddingTop:20,
        paddingBottom:15,
        justifyContent:'center',
        borderColor:'lightgrey',
        borderBottomWidth:1,
        backgroundColor:'#F5E5E1',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 15,
    },
})
