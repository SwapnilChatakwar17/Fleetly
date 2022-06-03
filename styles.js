const {StyleSheet} = require ("react-native")

const globalColors={
    mainColor:"#ec1817",
    // mainColor:"skyblue",
    rootLight:"rgb(242,242,242)",
    buttonLightGrey:'#dbdbdbdb',
    lightBlack:"#282828",
    expenses:"rgb(255,80,102)",
    income:"rgb(67,203,149)"
}
export {globalColors}

const globalFonts={
    light:"Inter_300Light",
    regular:"Inter_400Regular",
    medium:"Inter_500Medium",
    semibold:"Inter_600SemiBold",
    bold:"Inter_700Bold"
}
export {globalFonts}

const loginStyles=StyleSheet.create({
logoView:{
    flex:3,
    backgroundColor:"white"
},
underLogoView:{
    flex:4,
    backgroundColor:"white"
},
textInputsView:{
    flexDirection:"row",
    height:60,
    borderBottomWidth:1,
    marginHorizontal:45,
    marginTop:10,
    paddingTop:20,
},
textInputs:{
    flex:1
},
inputIcons:{
    paddingTop:12,
    paddingRight:7,
    paddingLeft:3
},
forgotPasswordText:{
    fontSize:13,
    fontFamily:globalFonts.regular,
    color:globalColors.mainColor,
    alignSelf:"flex-end",
    marginRight:45,
    marginTop:15
},
loginButton:{
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    backgroundColor:globalColors.mainColor,
    borderRadius:45,
},
loginButtonView:{
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
    height:53,
    borderRadius:45,
    marginHorizontal:90,
//     shadowColor: "red",
//     shadowOffset: {
// 	    width: -1,
// 	    height: 6,
// },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.322,
//     backgroundColor:globalColors.mainColor,
//     elevation: 16,
    // borderWidth:1
},
loginFB:{
    alignItems:'center',
    justifyContent:'center',
    height:47,
    borderRadius:30,
    backgroundColor:'#4267B2',
    width: 150
},
loginGG:{
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderRadius:30,
    backgroundColor:'wheat'
},
signUp:{
    fontFamily:globalFonts.regular,
    color:"grey"
}
})
export {loginStyles}

const moreStyles=StyleSheet.create({
    item:{
        backgroundColor: '#F5E5E1',
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:10,
        paddingHorizontal:15,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start',
        
    },
    itemText:{
        marginLeft:10,
        fontFamily:globalFonts.regular,
        fontSize:15
    },
    sectionHeader:{
        fontFamily:globalFonts.semibold,
        fontSize:22,
        color:globalColors.lightBlack,
        marginLeft:18,
        // alignSelf:'center',
        marginVertical:15,
    },
    logoutButton:{
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    height:53,
    borderRadius:45,
    marginHorizontal:40,
    backgroundColor:globalColors.mainColor,
    },
    version:{
        marginTop:8,
        alignSelf:'center', 
        fontFamily:globalFonts.regular,
        color:'darkgrey',
        fontSize:10
    }
})
export {moreStyles}

const financeStyles=StyleSheet.create({
    summaryContainer:{
        marginTop:10,
    },
    categoriesContainer:{
        // height:600
    },
    sectionHeader:{
        fontFamily:globalFonts.semibold,
        fontSize:20,
        color:globalColors.lightBlack,
        paddingLeft:10,
    },
    summaryTop:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:25,
        marginBottom:20,
    },
    summaryMoneyBlock:{
        flex:1, 
        height:90 ,
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        marginHorizontal:10,
        backgroundColor: '#F5E5E1',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        
        elevation: 1,
    },
    dollorMoneyBlock:{
        flex:1, 
        height:90 ,
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        marginHorizontal:10,
        backgroundColor: '#F5E5E1',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        
        elevation: 1,
    },
    categoryElement:{
        flexDirection:'row',
        height:50,
        // backgroundColor:globalColors.buttonLightGrey,
        backgroundColor:'#F5E5E1',
        marginVertical:6,
        marginHorizontal:10,
        borderRadius:25,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.18,
        // shadowRadius: 1.00,

        // elevation: 1,
    }
})
export {financeStyles}

const contractStyles=StyleSheet.create({

})
export {contractStyles}