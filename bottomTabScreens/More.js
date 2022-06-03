import React, {useState} from 'react';
import { Alert, SafeAreaView, SectionList, Text, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {globalColors, globalFonts, moreStyles} from '../styles';
import MyButton from '../MyButton';
import TopHeader from '../components/TopHeader'
import TopPickers from '../components/TopPickers';

const initialList=[
  {
    title:'Account',
    data:[
      {info:'Osc Professionals',icon:'account-circle-outline'},
      // {info:'Upgrade to PREMIUM!',icon:'star-circle'},
    ]
  },
  {
    title:'General',
    data:[      
      // {info:'Vehicles',icon:'car', sideText:'1'},
      {info:'Categories',icon:'dns-outline'},
      // {info:'Currency',icon:'currency-usd', sideText:'PLN'},
      {info:'Appearance',icon:'invert-colors'},
      {info:'Notifications',icon:'bell-ring-outline'},
    ]
  },
  {
    title:'Other',
    data:[
      // {info:'Advanced', icon:'tools'},
      {info:'Support', icon:'lifebuoy'},
      {info:'Terms and Policies', icon:'information-outline'}
    ]
  },{
    data:[
      {info:'Logout'}
    ]
  }
]

const handleLogout=()=>{
  alert('Logout')
}

const Item=({ info, icon, sideText})=>{
  if(info=='Logout'){
    return(
      <View style={{justifyContent:'center',}}>
        <MyButton func={handleLogout} title={info} style={moreStyles.logoutButton}/>
        <Text style={moreStyles.version}>Oscprofessionals Expense Tracker v1.0.0 </Text>
      </View>
    )
  }
  else{
    return(
      <TouchableHighlight onPress={()=>alert('tap')} activeOpacity={0.5} underlayColor={globalColors.rootLight}>
      <View style={moreStyles.item}>
        <MaterialCommunityIcons name={icon} size={31} color={globalColors.mainColor}/>
          <Text style={moreStyles.itemText}>{info}</Text>
          <Text style={{position:'absolute', right:45, color:'darkgrey', display: sideText ? 'flex': 'none'}}>{sideText}</Text>
        <MaterialCommunityIcons style={{position:'absolute', right:15}} name={'chevron-right'} size={25} color={'darkgrey'}/>
      </View>
    </TouchableHighlight>
      )
  }
}


const More=()=> {
  const [list, setList] = useState(initialList)
  
  const renderItem=({ item })=>(
    <Item info={item.info} icon={item.icon} sideText={item.sideText} />
  )
  
  const renderSectionHeader=({section:{title}})=>(
    <Text style={moreStyles.sectionHeader}>{title}</Text>
  )
  return (
      <SafeAreaView style={{flex: 1}}>
        <TopHeader title={"More"}/>
        <SectionList
        sections={list} 
        keyExtractor={(item,index)=>item.info+index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        />
      </SafeAreaView>
    );
}
export default More
