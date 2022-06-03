import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import More from './More'
import Finance from './Chart'
import Home from './Home'
import {globalColors, globalFonts} from '../styles'

const Tab=createBottomTabNavigator()

const TabScreen=(props)=> {
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused,color,size }) => {
              let iconName;
              if (route.name == 'Home') {
                iconName = 'garage'
                size= focused ? 31 : 27
            } 
            else if (route.name == 'Chart') {
                iconName = 'finance'
                size= focused ? 31 : 27
            }
            else if (route.name=='Contracts'){
                // iconName = 'chart-timeline'
                // iconName = 'file-table-outline'
                iconName = 'file-document-outline'
                size= focused ? 31 : 27
            }
            else if (route.name=='More'){
                iconName = 'dots-horizontal'
                size= focused ? 31 : 27
            }
            else if (route.name=='Add'){
                iconName='plus-circle'
                size=70
            }
            if(route.name=='Add'){
                return (
                <View style={{
                    position:'absolute', 
                    bottom:4, 
                    // shadowColor: "red",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 5,
                    // },
                    // shadowOpacity: 0.3,
                    // shadowRadius: 5,
                    // elevation: 55,
                }}>
                    <MaterialCommunityIcons name={iconName} size={size} color={globalColors.mainColor} />
                </View>
                )
            }
            else{
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />
            }
            },
            tabBarLabel: route.name=='Add' ? ()=>null : route.name
          })}
          tabBarOptions={{
            activeTintColor: globalColors.mainColor,
            inactiveTintColor: 'gray',
            style:{
                height:'9.5%',
                paddingTop:'1%',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                
                elevation: 10,
            },
            labelStyle:{
                fontFamily: globalFonts.medium,
                paddingBottom:'10%'
            }
            // showLabel:false
          }}
        >
            <Tab.Screen name="Chart" component={Finance}/>
            <Tab.Screen name="Add" component={Home}/>
            <Tab.Screen name="More" component={More}/>
        </Tab.Navigator>
    )
}
export default TabScreen
