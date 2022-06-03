import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {globalFonts, globalColors} from '../styles'

const TopHeader = (title) => {
    return (
        <View style={localStyles.pickersContainer}>
            <Text style={{fontFamily:globalFonts.semibold, fontSize:17, color: globalColors.lightBlack}}>{title.title}</Text>
        </View>
    )
}

// {title.title=='More'? localStyles.topHeaderNoPickers : localStyles.topHeader }
export default TopHeader

const localStyles=StyleSheet.create({
    // topHeader:{
    //     alignItems:'center',
    //     justifyContent:'center',
    //     height:45,
    // },
    // topHeaderNoPickers:{
    //     alignItems:'center',
    //     justifyContent:'center',
    //     height:45,
    //     borderColor:'lightgrey',
    //     borderBottomWidth:1,
        // backgroundColor:'rgb(242,242,242)',
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 4,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        // elevation: 3,
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
